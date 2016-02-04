//
// Component: Editable field
// --------------------

var React = require('react')
var checklistActions = require('../actions/checklistActions')

var Title = React.createClass({
    getInitialState: function() {
        return { editing: false }
    },

    // Event Handlers
    handleEdit: function() {
        this.setState({editing: true})
    },
    handleOnKeyUp: function(event) {
      if (event.keyCode === 13) {
        this.handleSave(event)
      }
      else if (event.keyCode === 27) {
        this.stopEditing()
      }
    },
    handleSave: function(event) {
      if (this.state.editing) {
        var title = this.props
        var text = event.target.value.trim()

        if (text.length && text !== title.text) {
          checklistActions.updateTitle(text)
        }

        this.stopEditing()
      }
    },


    stopEditing: function() {
      this.setState({editing: false})
    },

    renderInput: function(title) {
      return (
        <input
          autoComplete="off"
          autoFocus
          className=""
          defaultValue={title.text}
          maxLength="128"
          onBlur={this.handleSave}
          onKeyUp={this.handleOnKeyUp}
          ref="title_input"
          type="text"/>
      )
    },

    renderTitle: function(title) {
      return (
        <h1 onClick={this.handleEdit}><span className='text-editable'>{title.text}</span></h1>
      )
    },

    render: function() {
      return (
        <div className='checklist__title'>
          {this.state.editing ? this.renderInput(this.props) : this.renderTitle(this.props)}
        </div>
      )
    }
})

module.exports = Title
