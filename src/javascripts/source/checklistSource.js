// 
// Sources
// ----------------

var checklistActions = require('../actions/checklistActions');

var mockGroups = [
  {id: 1, label: 'Sémantika'}
];

var mockData = [
  { id: 0, group_id: 1, label: 'Ikony a favikony', desc: '(<a href="#">Generátor</a>)', done: false },
  { id: 2, group_id: 1, label: 'Facebook Open Graph', desc: '(<a href="#">Validátor</a>)', done: false },
  { id: 3, group_id: 1, label: 'Twitter Cards', desc: '(<a href="#">Validátor</a>)', done: false },
  { id: 4, group_id: 1, label: 'Strukturovaná data pro Google', desc: '(<a href="#">Tester</a>, <a href="#">Článek</a>)', done: false },
  { id: 5, group_id: 1, label: 'Správný title, meta desc a struktura nadpisů', desc: '(<a href="#">Tester</a>)', done: false },
];

var ChecklistSource = {
  fetchGroups() {
    return {
      remote() {

        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockGroups);
            } else {
              reject('Things have broken');
            }
          }, 250)
        })
      },

      success: checklistActions.updateGroups,
      error: checklistActions.loadFailed,
      loading: checklistActions.loadProgress
    }
  },

  fetchChecklistItems() {
    return {
      remote() {

        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockData);
            } else {
              reject('Things have broken');
            }
          }, 250)
        })
      },

      success: checklistActions.updateItems,
      error: checklistActions.loadFailed,
      loading: checklistActions.loadProgress
    }
  }
};

module.exports = ChecklistSource;