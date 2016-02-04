//
// Checklist Store
// -----------

// Require

var API = require('superagent')
var checklistActions = require('../actions/checklistActions')
var alt = require('../alt')
var config = require('../config')

// Class definition

class ChecklistStore {
    constructor() {
        this.errorMessage = null
        this.loaded = false
        this.items = {} // We must be able to push key => value, array is not enough
        this.groups = {}
        this.title = null
        this.checklistId = null

        this.bindActions(checklistActions)
    }
    addItem(item) {
      // debugger
      this.items[item.id] = item

      // var self = this

      // API.post(checklistActions.APIpath + '2341345/items')
      // .send(JSON.stringify(item))
      // .end(function(err, res){
      //   // TEMP: dočasné řešení ID
      //   var item = res.body
      //   self.items[item.id] = item
      //   resolve()
      //   // TODO: pokud to vrátí nějaký error, je třeba zobrazit v rozhraní
      // })


    }

    toggleItem(id) {
        this.items[id].done = !this.items[id].done

        API.put(config.APIpath + this.checklistId + '/items/' + id)
        .set('Content-Type', 'application/json')
        .send(this.items[id])
        .end(function(err, res){
          // TODO: pokud to vrátí nějaký error, je třeba zobrazit v rozhraní
        });
    }
    updateLabel(data) {
        var id = data[0]
        var label = data[1]

        // TODO: jak se správně řeší předávání data přes akce
        this.items[id].label = label

        API.put(config.APIpath + this.checklistId + '/items/' + id)
        .set('Content-Type', 'application/json')
        .send(this.items[id])
        .end(function(err, res){
          // TODO: pokud to vrátí nějaký error, je třeba zobrazit v rozhraní
        });
    }

    updateTitle(title) {
        this.title = title
        var data = { name: title }
        // TODO: jak se správně řeší předávání data přes akce

        API.put(config.APIpath + this.checklistId)
        .set('Content-Type', 'application/json')
        .send(data)
        .end(function(err, res){
          // TODO: pokud to vrátí nějaký error, je třeba zobrazit v rozhraní
        });
    }

    removeItem(id) {
        delete this.items[id]

        API.del(config.APIpath + this.checklistId + '/items/' + id)
        .end(function(err, res){
          // TODO: pokud to vrátí nějaký error, je třeba zobrazit v rozhraní
        })
    }

    fetchChecklist(data) {
        this.loaded = true
        var name = data.name // Checklist title
        var id = data.id // Checklist ID
        var groups = data.groups

        this.title = name
        this.checklistId = id

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

    requestSuccess() {
        this.loaded = true
    }

    requestProgress() {
        this.loaded = false
    }
    requestError(error) {
        // TODO
        this.errorMessage = error.message
    }
}

module.exports = alt.createStore(ChecklistStore)
