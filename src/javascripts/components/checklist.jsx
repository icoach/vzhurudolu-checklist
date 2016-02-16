//
// Component: Checklist
// --------------------

var React = require('react')
var checklistActions = require('../actions/checklistActions')
var checklistStore = require('../store/checklistStore')
var List = require('./list.jsx')
var Title = require('./title.jsx')
var classNames = require('classnames')
var Loader = require('react-loader');
var config = require('../config');

var Checklist = React.createClass({
    getInitialState: function() {
        return {
            groups: checklistStore.getState().groups,
            items: checklistStore.getState().items,
            title: checklistStore.getState().title,
            errorMessage: checklistStore.getState().errorMessage,
            loaded: checklistStore.getState().loaded
        }
    },
    componentDidMount: function() {
        var parser = document.createElement('a')
        parser.href = window.location.href

        var id = null
        if (parser.href.indexOf('localhost:8888') === true) {
          id = '2341345'
          config.APIpath = 'http://vzhurudolu.lcl/checklistapi/checklists/'
        }
        else {
          id = parser.pathname.split("/")[2].trim()
        }
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

        var checklistClasses = classNames({
          'checklist': true,
          'checklist--loading': this.state.loaded
        })

        return (
            <div className={checklistClasses}>
                <Loader loaded={this.state.loaded}>
                  <span>{this.state.errorMessage}</span>
                  <Title text={this.state.title} />
                  {groups}
                </Loader>
            </div>
        )
    }
})

module.exports = Checklist
