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
        this.errorMessage = null
        this.loading = false
        this.items = {} // We must be able to push key => value, array is not enough
        this.groups = {}

        this.bindActions(checklistActions)

        // if (localStorage.items) {
        //     this.items = JSON.parse(localStorage.items)
        // }
        this.registerAsync(checklistSource);
    }
    addItem(label) {
        var id = Date.now()
        this.items[id] = { id: id, group_id: 1, label: label, desc: '', done: false }
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
    
    loadChecklist(data) {
        this.loading = false
        var name = data.name // Checklist title
        var groups = data.groups

        // Push fetched items to the state
        for (var key in groups) {
            var items = groups[key].items
            var groupId = groups[key].id
            this.groups[groupId] = groups[key]
            
            for (var key_item in items) {
                var id = items[key_item].id
                items[key_item].group_id = groupId 
                this.items[id] = items[key_item]
            }
        }
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