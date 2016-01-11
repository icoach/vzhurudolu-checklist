//
// Component: Item
// --------------------

var React = require('react');
var checklistActions = require('../actions/checklistActions');


var Item = React.createClass({
    handleToggleClick: function() {
        checklistActions.toggleItem(this.props.item_id);
    },
    handleRemoveClick: function() {
        checklistActions.removeItem(this.props.item_id);
    },

    render: function() {
        var status = (this.props.done) ? 'checklist__item--complete' : '';
        return (
            <li className={status}>
                <span className='checklist-item__label' onClick={this.handleToggleClick}>{this.props.label}</span>
                <span 
                    className='checklist-item__desc'
                    dangerouslySetInnerHTML={{ __html: this.props.desc }}
                />
                <i className='checklist-item_remove fa fa-times' onClick={this.handleRemoveClick}>Remove</i>
            </li>
        );
    }
});


module.exports = Item;