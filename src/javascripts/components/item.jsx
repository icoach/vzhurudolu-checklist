//
// Component: Item
// --------------------

var React = require('react')
var checklistActions = require('../actions/checklistActions')
var checklistStore = require('../store/checklistStore')
var classNames = require('classnames')

var Item = React.createClass({
    getInitialState: function() {
        return { editing: false, showInfo: false }
    },

    handleToggle: function() {
        checklistActions.toggleItem(this.props.item_id)

    },
    handleRemove: function() {
        checklistActions.removeItem(this.props.item_id)
    },
    handleEdit: function() {
      if (!this.state.editing) {
        this.setState({editing: true})
      }
      else {
        this.setState({editing: false})
      }
    },
    handleOnKeyUp: function(event) {
      if (event.keyCode === 13) {
        this.handleSave(event)
      }
      else if (event.keyCode === 27) {
        this.stopEditing()
      }
    },

    handleInfo: function() {
      if (!this.state.showInfo) {
        this.setState({showInfo: true})
      }
      else {
        this.setState({showInfo: false})
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
      return (
        <span>{item.label}</span>
      )
    },

    renderInfo: function(desc) {
      var description = <span dangerouslySetInnerHTML={{ __html: "(" + desc + ")" }} />
      return (
        <div className='checklist-item__desc'>{description}</div>
      )
    },

    render: function() {
        var editing = this.state.editing

        if (this.props.desc) {
          var desc = <span dangerouslySetInnerHTML={{ __html: "(" + this.props.desc + ")" }} />
        }

        var itemClasses = classNames({
          'checklist-item': true,
          'checklist-item--complete': this.props.done,
          'checklist-item--editing': this.state.editing
        })

        var descButtonClasses = classNames({
          'hide': !this.props.desc,
          'checklist-item__button': true
        })

        return (
            <li className={itemClasses}>

              <div className='cell checklist-item__toggle'>
                <button className='checklist-item__button' onClick={this.handleToggle} aria-hidden="false" aria-label="Mark task as completed" type="button">O</button>
              </div>

              <div className='cell checklist-item__label'>
                {this.state.editing ? this.renderInput(this.props) : this.renderItem(this.props)}
                {this.state.showInfo && this.props.desc ? this.renderInfo(this.props.desc) : ''}
              </div>

              <div className='cell checklist-item__actions'>
                <button onClick={this.handleInfo} aria-hidden="false" aria-label="More information" className={descButtonClasses} type="button">I</button>
                <button onClick={this.handleEdit} aria-hidden="false" aria-label="Edit task" className="checklist-item__button" type="button">E</button>
                <button onClick={this.handleRemove} aria-hidden="false" aria-label="Delete task" className="checklist-item__button" type="button">D</button>
              </div>

            </li>
        )
    }
})


module.exports = Item
