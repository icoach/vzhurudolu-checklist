// 
// Checklist Store
// -----------

// Require

var alt = require('../alt')
var checklistActions = require('../actions/checklistActions')
var checklistSource = require('../source/checklistSource')


// Class definition

class ChecklistStore {
    constructor() {
        this.errorMessage = null;
        this.loading = false
        this.items = []
        this.groups = []

        this.bindActions(checklistActions)

        // this.items = {
        //     starter_item_a: {
        //         text: 'Click an item to mark it as complete',
        //         complete: false
        //     },
        //     starter_item_b: {
        //         text: 'Use the "x" to remove it completely',
        //         complete: false
        //     }
        // }
        // if (localStorage.items) {
        //     this.items = JSON.parse(localStorage.items)
        // }
        this.registerAsync(checklistSource);
    }
    addItem(label) {
        // create random id...copypasta from the alt todo example
        var id = (+new Date() + Math.floor(Math.random() * 999998)).toString(36)
        this.items[id] = {label: label, group_id: 1, desc: '', done: false}
        // localStorage.items = JSON.stringify(this.items)
    }
    toggleItem(id) {
        this.items[id].done = !this.items[id].done
        // localStorage.items = JSON.stringify(this.items)
    }
    removeItem(id) {
        delete this.items[id]
        // localStorage.items = JSON.stringify(this.items);
    }
    updateItems(items) {
        this.loading = false
        this.items = items
    }
    updateGroups(groups) {
        this.groups = groups
    }
    loadProgress() {
        this.loading = true
    }
    loadFailed(errorMessage) {
        // TODO
        this.errorMessage = errorMessage
    }
}

module.exports = alt.createStore(ChecklistStore)