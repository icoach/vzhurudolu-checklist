// 
// Sources
// ----------------

var checklistActions = require('../actions/checklistActions');

var mockData = {
  "id": "abs34xay23",
  "name": "My checklist",
  "created": "2015-08-05T08:40:51.620Z",
  "groups": [
    {
      "id": 1,
      "name": "Sémantika",
      "items": [
        {
          "id": 1,
          "label": "Ikony a favicony",
          "desc": "<a href=\"http://realfavicongenerator.net\">Generátor</a>",
          "done": true
        },
        {
          "id": 2,
          "label": "Facebook Open Graph",
          "desc": "",
          "done": false
        },
        {
          "id": 3,
          "label": "Twitter Cards",
          "desc": "",
          "done": false
        },
        {
          "id": 3,
          "label": "Strukturovaná data pro Google",
          "desc": "",
          "done": false
        }
      ]
    },
    {
      "id": 2,
      "name": "Struktura webu",
      "items": [
        {
          "id": 4,
          "label": "Kontrola ztracených odkazů",
          "desc": "<a href=\"http://realfavicongenerator.net\">Generátor</a>",
          "done": true
        },
        {
          "id": 5,
          "label": "Chybové stránky: 404 a 50x",
          "desc": "<a href=\"http://realfavicongenerator.net\">Generátor</a>",
          "done": false
        }
      ]
    }
  ]
}

var ChecklistSource = {
  save: {
      remote: function (item) {
        return new Promise(function (resolve, reject) {
          // Async call to post Checklist Item
          var xhr = new XMLHttpRequest();
debugger
          xhr.open('POST', encodeURI('http://private-a13d4-checklist5.apiary-mock.com/checklist-api/checklists/abs34xay23/items'));
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
              if (xhr.status === 201 || xhr.status === 200) {
                  // Item has been added
                  resolve()
              }
              else {
                  // alert('Request failed.  Returned status of ' + xhr.status);
                  reject('Položku se nepodařilo uložit')
              }
          };
          xhr.send(JSON.stringify(item));

        })
      },

      success: checklistActions.asyncSuccess,
      error: checklistActions.asyncFailed,
      loading: checklistActions.asyncProgress

  },

  remove: {
      remote: function (id) {
debugger
        return new Promise(function (resolve, reject) {
          // Async call to post Checklist Item
          var xhr = new XMLHttpRequest();
          xhr.open('DELETE', encodeURI('http://private-a13d4-checklist5.apiary-mock.com/checklist-api/checklists/abs34xay23/items/' + id));
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
              if (xhr.status === 200) {
                  // Item has been removed
                  resolve()
              }
              else {
                  // alert('Request failed.  Returned status of ' + xhr.status);
                  reject('Položku se nepodařilo odstranit.')
              }
          };
          xhr.send();

        })
      },

      success: checklistActions.asyncSuccess,
      error: checklistActions.asyncFailed,
      loading: checklistActions.asyncProgress

  },

  fetchChecklist: {
      remote: function (id) {
        debugger
        return new Promise(function (resolve, reject) {
          // Async call to get Checklist
          var xhr = new XMLHttpRequest();
          xhr.open('GET', encodeURI('http://private-a13d4-checklist5.apiary-mock.com/checklist-api/checklists/abs34xay23'));
          xhr.onload = function() {
              if (xhr.status === 200) {
                  // Parse JSON response
                  var result = JSON.parse(xhr.responseText)
                  resolve(result)
              }
              else {
                  reject('Things have broken');
                  // alert('Request failed.  Returned status of ' + xhr.status);
              }
          };
          xhr.send();
        })
      },

      success: checklistActions.loadChecklist,
      error: checklistActions.asyncFailed,
      loading: checklistActions.asyncProgress
   
  }
};

module.exports = ChecklistSource;