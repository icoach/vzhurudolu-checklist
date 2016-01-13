//
// Actions
// ------------------------

// Require

var alt = require('../alt');


// Class definition

class ChecklistActions {
    constructor() {
        this.generateActions(
            'addItem',
            'toggleItem',
            'removeItem',
            'fetchItems',
            'loadFailed',
            'loadProgress'
        )
    }

    loadChecklist(data) {
		return data;
	}

}

module.exports = alt.createActions(ChecklistActions);