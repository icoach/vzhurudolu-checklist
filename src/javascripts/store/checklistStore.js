// 
// Checklist Store
// -----------

// Require

var alt = require('../alt')
var checklistActions = require('../actions/checklistActions')
// var checklistSource = require('../source/checklistSource')
var API = require('superagent')

// Class definition

class ChecklistStore {
    constructor() {
        this.errorMessage = null
        this.loading = false
        this.items = {} // We must be able to push key => value, array is not enough
        this.groups = {}

        this.bindActions(checklistActions)

        // this.registerAsync(checklistSource)
    }
    addItem(item) {
        this.items[item.id] = item

        API.post('http://private-a13d4-checklist5.apiary-mock.com/checklist-api/checklists/abs34xay23/items')
        .send(JSON.stringify(item))
        .end(function(err, res){

        })
    }

    toggleItem(id) {
        this.items[id].done = !this.items[id].done

        API.post('http://private-a13d4-checklist5.apiary-mock.com/checklist-api/checklists/abs34xay23/items')
        .send(JSON.stringify(this.items[id]))
        .end(function(err, res){
            
        });
    }
    removeItem(id) {
        delete this.items[id]

        API.del('http://private-a13d4-checklist5.apiary-mock.com/checklist-api/checklists/abs34xay23/items/' + id)
        .end(function(err, res){

        })
    }
    
    fetchChecklist(data) {
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

    asyncSuccess() {
        debugger
        this.loading = false
    }

    asyncProgress() {
        this.loading = true
    }
    asyncFailed(errorMessage) {
        // TODO
        this.errorMessage = errorMessage
    }
}

module.exports = alt.createStore(ChecklistStore)