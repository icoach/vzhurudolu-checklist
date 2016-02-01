//
// Component: Item
// --------------------

var React = require('react')
var checklistActions = require('../actions/checklistActions')
var checklistStore = require('../store/checklistStore')

var Item = React.createClass({
    getInitialState: function() {
        return { editing: false }
    },

    handleToggleClick: function() {
        checklistActions.toggleItem(this.props.item_id)

    },
    handleRemoveClick: function() {
        checklistActions.removeItem(this.props.item_id)
    },
    handleEdit: function() {
        this.setState({editing: true})
    },
    handleOnKeyUp: function(event) {
      if (event.keyCode === 13) {
        this.saveTitle(event)
      }
      else if (event.keyCode === 27) {
        this.stopEditing()
      }
    },

    handleSave: function(event) {
      if (this.state.editing) {
        var item = this.props
        var label = event.target.value.trim()

        if (label.length && label !== item.label) {
          checklistActions.updateLabel(item.item_id, label)
        }

        this.stopEditing()
      }
    },

    stopEditing: function() {
      this.setState({editing: false})
    },


    renderInput: function(item) {
      return (
        <input
          autoComplete="off"
          autoFocus
          className=""
          defaultValue={item.label}
          maxLength="128"
          onBlur={this.handleSave}
          onKeyUp={this.handleOnKeyUp}
          ref="label_input"
          type="text"/>
      );
    },

    renderItem: function(item) {
      if (item.desc) {
          var desc = <span dangerouslySetInnerHTML={{ __html: "(" + item.desc + ")" }} />
      }

      return (
        <div>
        <input className='checklist-item_trigger' type='checkbox' checked={this.props.done} onChange={this.handleToggleClick} />
        <span className='checklist-item__label' onClick={this.handleEdit}>{this.props.label} </span>
        <span className='checklist-item__desc'>
            {desc}
        </span>
        </div>
      )
    },

    render: function() {
        var status = (this.props.done) ? 'checklist__item checklist__item--complete' : 'checklist__item'
        var editing = this.state.editing

        return (
            <li className={status}>
              {this.state.editing ? this.renderInput(this.props) : this.renderItem(this.props)}

              <i className={editing ? 'hide' : ''} onClick={this.handleEdit}>Edit</i>
              <i className='checklist-action__remove' onClick={this.handleRemoveClick}>&times;</i>
            </li>
        )
    }
})


module.exports = Item
