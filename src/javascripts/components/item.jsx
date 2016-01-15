//
// Component: Item
// --------------------

var React = require('react')
var checklistActions = require('../actions/checklistActions')
var checklistStore = require('../store/checklistStore')

var Item = React.createClass({
    handleToggleClick: function() {
        checklistActions.toggleItem(this.props.item_id)

    },
    handleRemoveClick: function() {
        checklistActions.removeItem(this.props.item_id)
    },

    render: function() {
        var status = (this.props.done) ? 'checklist__item--complete' : 'checklist__item'

        if (this.props.desc) {
            var desc = <span dangerouslySetInnerHTML={{ __html: "(" + this.props.desc + ")" }} />
        }

        return (
            <li className={status}>
                <input className='checklist-item_trigger' type='checkbox' checked={this.props.done} onChange={this.handleToggleClick} />
                <span className='checklist-item__label'>{this.props.label} </span>
                <span className='checklist-item__desc'>
                    {desc}
                </span>
                <i className='checklist-action__remove' onClick={this.handleRemoveClick}>&times;</i>
            </li>
        )
    }
})


module.exports = Item