// Configuration file for Checklist App

var config = {
  APIpath: '/checklistapi/checklists/',

  selectedLanguage: 'cs',

  cs: {
    taskComplete: 'Označit úkol za splněný',
    taskInfo: 'Zobrazit informace',
    taskEdit: 'Upravit úkol',
    taskDelete: 'Smazat úkol',
    descriptionClose: 'Zavřít',
    addItem: 'Přidat položku',
    addAction: 'Přidat',
    addPlaceholder: 'Co ještě musím zkontrolovat'
  },
  en: {
    taskComplete: 'Mark task as completed',
    taskInfo: 'More information',
    taskEdit: 'Edit task',
    taskDelete: 'Delete task',
    descriptionClose: 'Close',
    addItem: 'Add Item',
    addAction: 'Add',
    addPlaceholder: 'What else has to be checked'
  }
}

module.exports = config
