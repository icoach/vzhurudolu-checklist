//
// Actions
// ------------------------

// Require

var alt = require('../alt');
var API = require('superagent')

// Class definition

class ChecklistActions {
    constructor() {
        this.generateActions(
            'toggleItem',
            'addItem',
            'removeItem',
            'asyncFailed',
            'asyncProgress'
        )
    }

    // Promise doesn't trigger generated action, has to explicit
    fetchChecklist(id) {
        return function(dispatch) {
            API.get('http://private-a13d4-checklist5.apiary-mock.com/checklist-api/checklists/' + id)
            .end(function(err, res){
                dispatch(res.body)
            });
        }
	}

    asyncSuccess() {
        return true
    }

}

module.exports = alt.createActions(ChecklistActions);