# Introduction

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)
[![Build Status](https://travis-ci.org/mgechev/angular2-seed.svg?branch=master)](https://travis-ci.org/mgechev/angular2-seed)
[![Build Status](https://ci.appveyor.com/api/projects/status/github/mgechev/angular2-seed?svg=true)](https://ci.appveyor.com/project/mgechev/angular2-seed)
[![Join the chat at https://gitter.im/mgechev/angular2-seed](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mgechev/angular2-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/mgechev/angular2-seed.svg)](https://david-dm.org/mgechev/angular2-seed)
[![devDependency Status](https://david-dm.org/mgechev/angular2-seed/dev-status.svg)](https://david-dm.org/mgechev/angular2-seed#info=devDependencies)

Provides fast, reliable and extensible starter for the development of Angular 2 projects.

`angular2-seed` provides the following features:

- Allows you to painlessly update the seed tasks of your already existing project.
- Out of the box ServiceWorkers and AppCache support thanks to the integration with [angular/mobile-toolkit](https://github.com/angular/mobile-toolkit).
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- Sample unit tests with Jasmine and Karma including code coverage via [istanbul](https://gotwarlost.github.io/istanbul/).
- End-to-end tests with Protractor.
- Development server with Livereload.
- Following the [best practices](https://angular.io/styleguide).
- Manager of your type definitions using [typings](https://github.com/typings/typings).
- Has autoprefixer and css-lint support.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

**Here is how to [speed-up the build on Windows](https://github.com/mgechev/angular2-seed/wiki/Speed-up-the-build-on-Windows)**.

In order to start the seed use:


```bash
git clone --depth 1 https://github.com/mgechev/angular2-seed.git
cd angular2-seed
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
# npm run build.docs

# dev build
npm run build.dev
# prod build
npm run build.prod
```

_Does not rely on any global dependencies._

# Table of Content

- [Introduction](#introduction)
- [How to start](#how-to-start)
- [Table of Content](#table-of-content)
- [Configuration](#configuration)
- [Environment Configuration](#environment-configuration)
- [Tools documentation](#tools-documentation)
- [How to extend?](#how-to-extend)
- [Running tests](#running-tests)
- [Progressive Web Apps](#progressive-web-apps)
- [Contributing](#contributing)
- [Advanced Seed Option](#advanced-seed-option)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [Contributors](#contributors)
  - [Wiki Contributors](#wiki-contributors)
- [Change Log](#change-log)
- [License](#license)

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the `./tools/env/config.json` file. The keys in the file are the different environments.

The can be specified by using:

```bash
npm start -- --config-env ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add different key-value pairs to the `config.json` file in order to alter extra such environments.

# Tools documentation

A documentation of the provided tools can be found in [tools/README.md](tools/README.md).

# How to extend?

Visit the [Wiki page](https://github.com/mgechev/angular2-seed/wiki) of the project.

# Running tests

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window

# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor

# npm run webdriver-update <- You will need to run this the first time
npm run webdriver-start
npm run serve.e2e
npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

<!-- # Progressive Web Apps

`angular2-seed` supports progressive web apps with [angular/mobile-toolkit](https://github.com/angular/mobile-toolkit).

The seed can generate a file `manifest.appcache` which lists all files included in a project's output, along with SHA1 hashes of all file contents. This file can be used directly as an AppCache manifest (for now, `index.html` must be manually edited to set this up).

The manifest is also annotated for use with `angular2-service-worker`. Some manual operations are currently required to enable this usage. The package must be installed, and `worker.js` manually copied into the project src directory:

```bash
cp node_modules/angular2-service-worker/dist/worker.js src/client
```

In order to generate the manifest file run:

```bash
# ENV can be both prod or dev
npm run generate.manifest -- --env ENV
```

Then, the commented snippet in `main.ts` must be uncommented to register the worker script as a service worker. -->

