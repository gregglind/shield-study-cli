# cli tool for Shield Studies

## install

```sh
$ npm install -g shield-study-cli
```

## Usage:

```sh
$ shield -h

  Usage: shield [options] [command]


  Commands:

    run [options] <addonDir> [variation]
    profile [options] <dir>
    init [options] <name>
    lint <dir>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

### Shield Studies Tutorial

[How To Shield Study](https://github.com/mozilla/shield-studies-addon-utils/blob/master/howToShieldStudy.md)

## Subcommand examples:

### run

Run with a branch at random
```sh
$ shield run ~/aStudyAddon/ some-branch-name --prefs some.prefs.json  --  -v  -b Aurora
```

Choose a branch, add some prefs
```sh
$ shield run ~/aStudyAddon/ some-branch-name
```

Add a firstrun time, and some extra prefs

```sh
$ shield run ~/aStudyAddon/ some-branch-name --firstrun 123214232 --prefs some.prefs.json  --  -v  -b Aurora
```

Add some arguments to passed to jpm.
```sh
$ shield run ~/aStudyAddon/ some-branch-name --prefs some.prefs.json  --  -v  -b Aurora
```

#### pref.js

- '+' prefs are treated as 'addon' prefs
- all other prefs are passed through
- prefs can be called more than once

```json
{
  "+some.addon.pref": "abcded",
  "browser.pref":  4
}
```

### profile

Make a new blank-ish profile, with some useful prefs.
```sh
$ shield profile some/path
```

Overwrite if needful.
```sh
$ shield profile --force some/path
```

Add some prefs
```sh
$ shield profile --prefs some.prefs  --prefs some.prefs
```

These are useful base profiles for debugging runs, qa, `jpm`, etc.


### init

```sh
$ shield init -h

  Usage: init [options] <name>

  Options:

    -h, --help  output usage information
    -f --force  remove dir if exists
```

Clone out the template, overrwriting if needful.

```sh
$ shield init my-feature-study-addon --force
```

### lint

TBD - lint an existing project study


## Sources

inspired by:

- https://developer.atlassian.com/blog/2015/11/scripting-with-node/

