# Checklist
![Bower version](https://img.shields.io/bower/v/bootstrap.svg?style=flat)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

## Instalace

Aplikace Checklist je postavena na ReactJS. K instalaci jsou k dispozici následující možnosti:

- [Stáhněte si aktuální poslední verzi](https://github.com/icoach/vzhurudolu-checklist/archive/master.zip).
- Naklonujte si repositář `git clone https://github.com/icoach/vzhurudolu-checklist.git`.
- Nainstalujte jako závislot přes [Bower](http://bower.io): `bower install https://github.com/icoach/vzhurudolu-checklist.git`.

Checklist využívá pro všechny úkoly `grunt`. K tomu je třeba nainstalovat všechny balíčky příkazem `npm install`.

### Jak používat

Aplikace vyžaduje pro své spuštění javascript a styly. Naleznete je v plain a minifikované formě v adresáři `dist`. Javascript obsahuje všechny potřebné knihovny včetně `react` a `react-dom`.

```
vzhurudolu-checklist/
└── dist/
    └── javascripts
        └── vzhurudolu-checklist.min.js
    └── stylesheets
        └── vzhurudolu-checklist.min.css
```

### Kompilace

Při změnách je nutné celý projekt znovu zkompilovat. K dispozici jsou tasky pro zpracování stylů i javascriptů:

- Kompletní produkční build: `grunt`
- Kompilace javasript: `grunt js`
- Kompilace stylů: `grunt css`
- Statický webserver s livereload: `grunt server`

Statický server se pouští na adrese `localhost:8888` a automaticky se reloaduje při každé změně. Před pushnutím nových verzí do repositáře je nutné pamatovat na puštění produkčního buildu.


## Autor

**Martin Staněk**

- <https://twitter.com/@koucik>
- <https://github.com/@skywalkapps>
