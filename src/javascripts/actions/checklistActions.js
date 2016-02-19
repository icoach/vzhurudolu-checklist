//
// Actions
// ------------------------

// Require

var API = require('superagent')
var alt = require('../alt')
var config = require('../config')

// Class definition

class ChecklistActions {
  constructor() {
      this.generateActions(
          'toggleItem',
          'removeItem',
          'updateItem',
          'updateLabel',
          'updateTitle',
          'requestProgress',
          'requestError',
          'setLanguage'
      )
      this.checklistId = null
  }

  addItem(item) {
    var self = this

    return function(dispatch, alt) {
      API.post(config.APIpath + self.checklistId + '/items')
        .set('Content-Type', 'application/json')
        .send(item)
        .end(function(err, res){
          if (err) {
            self.requestError(err)
          }
          else {
            dispatch(res.body)
          }
        })
    }
  }


  fetchChecklist(id) {
      var self = this
      this.checklistId = id

      return function(dispatch, alt) {
          API.get(config.APIpath + id)
          .end(function(err, res){
            if (err) {
              self.requestError(err)
            }
            else {
              dispatch(res.body)
            }
          })
      }
	}


}

module.exports = alt.createActions(ChecklistActions);
