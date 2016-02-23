//
// Component: Item
// --------------------

var React = require('react')
var checklistActions = require('../actions/checklistActions')
var checklistStore = require('../store/checklistStore')
var classNames = require('classnames')
var config = require('../config')

var Item = React.createClass({
    getInitialState: function() {
        return {
          editing: false,
          showInfo: false,
          language: checklistStore.getState().language
        }
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
        <span onClick={this.handleToggle}>{item.label}</span>
      )
    },

    renderInfo: function(desc) {
      var description = <span dangerouslySetInnerHTML={{ __html: "<small>" + desc + "</small>" }} />
      return (
        <div className='checklist-item__desc'>
          <button className='checklist-item__button checklist-item__button--close' onClick={this.handleInfo} aria-hidden="false" aria-label={this.state.language.descriptionClose} type="button">
            <svg className='checklist-glyph' width="24" height="24" viewBox="0 0 24 24">
              <path d="M14.6648,12.0134 L19.9268,6.75125 C20.3685,6.30982 20.3685,5.59112 19.9268,5.14431 L18.855,4.07302 C18.4133,3.63159 17.6944,3.63159 17.2473,4.07302 L11.9852,9.33527 L6.75274,4.10532 C6.31109,3.66389 5.59204,3.66389 5.14504,4.10532 L4.07319,5.17661 C3.63154,5.61804 3.63154,6.33674 4.07319,6.78356 L9.30568,12.0135 L4.07861,17.2353 C3.63696,17.6768 3.63696,18.3954 4.07861,18.8423 L5.15042,19.9135 C5.59208,20.355 6.31112,20.355 6.75812,19.9135 L11.9852,14.6917 L17.2231,19.927 C17.6648,20.3685 18.3838,20.3685 18.8308,19.927 L19.9026,18.8557 C20.3443,18.4143 20.3443,17.6956 19.9026,17.2488 L14.6648,12.0134 Z"></path>
            </svg>
          </button>

          {description}
        </div>
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
                <button className={classNames('checklist-item__button', { 'checklist-item__button--complete': this.props.done })} onClick={this.handleToggle} aria-hidden="false" aria-label={this.state.language.taskComplete} type="button">
                  <svg className='checklist-glyph' width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>
                </button>
              </div>

              <div className='cell checklist-item__label'>
                {this.state.editing ? this.renderInput(this.props) : this.renderItem(this.props)}
                {this.state.showInfo && this.props.desc ? this.renderInfo(this.props.desc) : ''}
              </div>

              <div className='cell checklist-item__actions'>
                <button onClick={this.handleInfo} aria-hidden="false" aria-label={this.state.language.taskInfo} className={descButtonClasses} type="button">
                  <svg className='checklist-glyph' width="24" height="24" viewBox="0 0 24 24"><path d="M14.644,3c1.456,0 2.183,0.822 2.183,1.762c0,1.174 -1.264,2.26 -2.911,2.26c-1.379,0 -2.184,-0.675 -2.145,-1.791c0,-0.939 0.957,-2.231 2.873,-2.231ZM10.162,21c-1.15,0 -1.993,-0.587 -1.188,-3.171l1.319,-4.582c0.23,-0.734 0.268,-1.027 0,-1.027c-0.345,0 -1.837,0.507 -2.719,1.006l-0.574,-0.793c2.796,-1.967 6.013,-3.12 7.392,-3.12c1.149,0 1.341,1.145 0.766,2.907l-1.51,4.816c-0.268,0.852 -0.153,1.145 0.114,1.145c0.345,0 1.476,-0.353 2.586,-1.087l0.652,0.734c-2.72,2.29 -5.689,3.172 -6.838,3.172Z"/></svg>
                </button>
                <button onClick={this.handleEdit} aria-hidden="false" aria-label={this.state.language.taskEdit} className="checklist-item__button" type="button">
                  <svg className='checklist-glyph' width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
                </button>
                <button onClick={this.handleRemove} aria-hidden="false" aria-label={this.state.language.taskDelete} className="checklist-item__button" type="button">
                  <svg className='checklist-glyph' width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                </button>
              </div>

            </li>
        )
    }
})


module.exports = Item
