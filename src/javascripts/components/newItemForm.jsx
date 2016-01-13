//
// Component: New item form
// --------------------

var React = require('react');
var checklistActions = require('../actions/checklistActions');

var NewItemForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var input_node = this.refs.item_label.getDOMNode();
        if (input_node.value) {
            checklistActions.addItem(input_node.value);
            input_node.value = '';
        }
        input_node.focus();
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref='item_label' />
                <button ref='add_button'>Add</button>
            </form>
        );
    }
});

module.exports = NewItemForm;