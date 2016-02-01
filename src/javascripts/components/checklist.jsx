//
// Component: Checklist
// --------------------

var React = require('react')
var checklistActions = require('../actions/checklistActions')
var checklistStore = require('../store/checklistStore')
var List = require('./list.jsx')
var Title = require('./title.jsx')


var Checklist = React.createClass({
    getInitialState: function() {
        return {
            groups: checklistStore.getState().groups,
            items: checklistStore.getState().items,
            title: checklistStore.getState().title,
            errorMessage: checklistStore.getState().errorMessage
        }
    },
    componentDidMount: function() {
        var id = "2341345" // ID should be retrieved from URL
        checklistActions.fetchChecklist(id) // method is automagically binded by checklistStore.registerAsync()
        checklistStore.listen(this.onChange)
    },
    componentWillUnmount: function() {
        checklistStore.unlisten(this.onChange)
    },
    onChange() {
        this.setState(this.getInitialState())
    },
    render: function() {

        var groups = []
        var data = this.state.groups

        for (var key in data) {
            var group = data[key]

            var items = []
            for (var key2 in this.state.items) {
                var item = this.state.items[key2]
                if (item.group_id == group.id) items.push(item)
            }

            groups.push(
                <List
                    group_id={group.id}
                    key={group.id}
                    name={group.name}
                    items={items} />
            )
        }

        return (
            <div className='checklist'>
                <span>{this.state.errorMessage}</span>
                <Title text={this.state.title} />
                {groups}
            </div>
        )
    }
})

module.exports = Checklist
