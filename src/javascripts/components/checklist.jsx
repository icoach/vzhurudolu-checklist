//
// Component: Checklist
// --------------------

var React = require('react')
var checklistActions = require('../actions/checklistActions')
var checklistStore = require('../store/checklistStore')
var NewItemForm = require('./newItemForm.jsx')
var List = require('./list.jsx')


var Checklist = React.createClass({
    getInitialState: function() {
        return {
            groups: checklistStore.getState().groups,
            items: checklistStore.getState().items
        };
    },
    componentDidMount: function() {
        var id = "23xyz" // ID should be retrieved from URL
        checklistStore.fetchChecklist(id) // method is automagically binded by checklistStore.registerAsync()
        checklistStore.listen(this.onChange)
    },
    componentWillUnmount: function() {
        checklistStore.unlisten(this.onChange)
    },
    onChange() {
        this.setState(this.getInitialState())
    },
    render: function() {
        if (this.state.errorMessage) {
            return (
              <div>{this.state.errorMessage}</div>
            )
        }

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
                <NewItemForm />
                {groups}
            </div>
        )
    }
})

module.exports = Checklist