## O-semantic CLI

<br>

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

O-semantic is a library that allows to write commits following the conventions, it has two types of configurations to establish the structure of the commit:

### Default

```bash
feat(lang): add Polish language
```

```bash
docs: correct spelling of CHANGELOG
```

```bash
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

### Jira

```bash
feat(lang): [SKCH-1789] add Polish language
```

```bash
docs: [SKCH-1789] correct spelling of CHANGELOG
```

```bash
fix: [SKCH-1789] prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: [SKCH-1789]
```

<br>

## Installing the command line tool

O-semantic is currently tested against Node.js 14, 16 & 18, although it may work in
older versions of Node.js. You should also have npm 6 or greater.

Installation is as simple as running the following command (if you see `EACCES` error, reading [fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) may help):

```sh
npm install -g o-semantic
```

## Using the command line tool

Simply use `o-semantic` or just `oc` instead of `git commit` when committing.

_Alternatively_, if you are using **npm 5.2+** you can [use `npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) instead of installing globally:

```sh
npx oc
```

or as an npm script:

```json
  ...
  "scripts": {
    "commit": "oc"
  }
```

```bash
oc -h  #show help you can use --help flag
```

```bash
Usage: o-semantic [options]

CLI to create semantic commits

Options:
  -V, --version  output the version number
  -d, --default  use default convention
  -j, --jira     use jira convention
  -h, --help     display help for command
```

## Related projects

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) – Generate a changelog from conventional commit history
- [commitlint](https://github.com/conventional-changelog/commitlint) - Lint commit messages
