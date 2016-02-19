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


## Creator

**Martin Staněk**

- <https://twitter.com/@koucik>
- <https://github.com/@skywalkapps>



To get started, check out <http://skywalkapps.github.io/bootstrap-dropmenu>!

## Quick start

Dropmenu plugin is built for Bootstrap 3. You have following options of installation:

- [Download the latest release](https://github.com/skywalkapps/bootstrap-dropmenu/archive/v0.9.0.zip).
- Clone the repo: `git clone https://github.com/skywalkapps/bootstrap-dropmenu.git`.
- Install with [Bower](http://bower.io): `bower install bootstrap-dropmenu`.

### How to use

The plugin requires only one file to include in your project. Within the download you'll find minified and plain versions of CSS. JavaScript is not necessary for current version of the plugin.

```
bootstrap-dropmenu/
└── dist/
    ├── bootstrap-dropmenu.css
    └── bootstrap-dropmenu.min.css
```

## Creator

**Martin Staněk**

- <https://twitter.com/@koucik>
- <https://github.com/@skywalkapps>

## Copyright and license

Code and documentation copyright 2015 Martin Staněk. Code released under [the MIT license](https://github.com/skywalkapps/bootstrap-dropmenu/blob/master/LICENSE).

