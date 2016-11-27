# vscode-uppercase
Convert selection to uppercase in [Visual Studio Code](https://github.com/Microsoft/vscode).

[![Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![Travis](https://img.shields.io/travis/ruiquelhas/vscode-uppercase.svg?style=flat-square)](https://travis-ci.org/ruiquelhas/vscode-uppercase)
[![Codecov](https://img.shields.io/codecov/c/github/ruiquelhas/vscode-uppercase.svg?style=flat-square)](https://codecov.io/gh/ruiquelhas/vscode-uppercase)

## How it works

### Using the command palette
![Command palette](static/palette.gif)

### Using a keyboard shortcut
![Keyboard shortcut](static/shortcut.gif)

The default keboard shortcut is set to `alt+shift+u`, but you can change it to something else by overriding the `key` value of the `uppercase.toUpperCase` command.

## Contributing
Contributions are welcome, either via [issues](https://github.com/ruiquelhas/vscode-uppercase/issues/new) or [pull requests](https://github.com/ruiquelhas/vscode-uppercase/compare).

For any code addition or change, follow the [style guide](http://standardjs.com/rules.html), add the respective tests and make sure the existing ones still pass.

### Running the tests

```sh
$ npm t
```

## License
MIT
