//
// Component: New item form
// --------------------

var React = require('react')
var checklistActions = require('../actions/checklistActions')
var checklistStore = require('../store/checklistStore')

var ItemForm = React.createClass({
    getInitialState: function() {
        return { showForm: false }
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var input_node = this.refs.item_label
        if (input_node.value) {
            var item = { id: Date.now(), label: input_node.value, group_id: this.props.groupId, desc: '', done: false }
            checklistActions.addItem(item)
            input_node.value = ''
        }
        input_node.focus()
    },

    handleToggleForm: function(e) {
        this.setState({showForm: !this.state.showForm})

        var input_node = this.refs.item_label
        input_node.focus()
    },

    render: function() {
        var id = 'add_item_' + Date.now() // Unique ID for form elements 
        var showForm = (!this.state.showForm) ? 'hide' : ''
        var showButton = (this.state.showForm) ? 'hide' : ''

        return (
            <div className='checklist-form'>
                <button className={showButton} onClick={this.handleToggleForm} ref='toggle_button'>+ Přidat položku</button>
                <form className={showForm} onSubmit={this.handleSubmit}>
                    <input className='checklist-field' id={id} placeholder="Co ještě musím zkontrolovat..." type='text' ref='item_label' />
                    &nbsp;<input type='submit' value='Přidat' ref='add_button' />
                </form>
            </div>
        );
    }
});

module.exports = ItemForm;