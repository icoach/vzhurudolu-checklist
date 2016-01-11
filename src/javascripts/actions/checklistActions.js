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

    updateItems(items) {
		return items;
	}

	updateGroups(groups) {
		return groups;
	}
}

module.exports = alt.createActions(ChecklistActions);