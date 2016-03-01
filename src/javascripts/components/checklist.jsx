//
// Component: Checklist
// --------------------

var React = require('react')
var checklistActions = require('../actions/checklistActions')
var checklistStore = require('../store/checklistStore')
var List = require('./list.jsx')
var Title = require('./title.jsx')
var classNames = require('classnames')
var Loader = require('react-loader')
var config = require('../config')
var configLocal = require('../configLocal')

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
        var id = null
        var appItem = document.getElementById('vd-checklist-app')
        var parser = document.createElement('a')
        parser.href = window.location.href

        if (appItem.getAttribute('data-lang')) {
          config.selectedLanguage = appItem.getAttribute('data-lang')
        }

        if (parser.href.indexOf('localhost:8888') > -1) {
          id = configLocal.mock_id
          config.APIpath = configLocal.APIpath
        }
        else if (parser.pathname) {
          id = parser.pathname.split("/")[2].trim()
        }
        else {
          debugger
          id = window.location.pathname.split("/")[2].trim()
        }

        checklistActions.fetchChecklist(id)
        checklistActions.setLanguage(config[config.selectedLanguage])
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
