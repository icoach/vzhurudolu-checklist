//
// Component: Checklist
// --------------------

var React = require('react');
var checklistActions = require('../actions/checklistActions');
var checklistStore = require('../store/checklistStore');
var NewItemForm = require('./newItemForm.jsx');
var List = require('./list.jsx');


var Checklist = React.createClass({
    getInitialState: function() {
        return {
            data: checklistStore.getState().items
        };
    },
    componentDidMount: function() {
        checklistStore.fetchChecklistItems(); // method is automagically binded by checklistStore.registerAsync()
        checklistStore.listen(this.onChange);
    },
    componentWillUnmount: function() {
        checklistStore.unlisten(this.onChange);
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

        return (

            <div className='checklist'>
                <NewItemForm />
                <List data={this.state.data} />
            </div>
        );
    }
});

module.exports = Checklist;