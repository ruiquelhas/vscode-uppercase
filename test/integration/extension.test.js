/* global setup, suite, teardown, test */

const { Position, Range, Selection, window, workspace } = require('vscode')
const assert = require('assert')
const fs = require('fs-promise')
const os = require('os')
const path = require('path')
const uppercase = require('extension')

suite('integration tests', () => {
  let editor

  setup('create canvas', () => {
    if (window.activeTextEditor) {
      editor = window.activeTextEditor
      return
    }

    const newFile = path.join(os.tmpdir(), 'foobar.txt')

    return fs.createFile(newFile)
      .then(() => {
        return workspace.openTextDocument(newFile)
      })
      .then(doc => {
        return window.showTextDocument(doc)
      })
      .then(activeTextEditor => {
        editor = activeTextEditor
      })
  })

  teardown('reset canvas', () => {
    return editor.edit(builder => {
      builder.insert(new Position(0, 0), '')
    })
  })

  test('converts selections to uppercase', () => {
    const content = 'foo\nbar'
    const fooStart = new Position(0, 0)
    const fooEnd = new Position(0, 3)
    const barStart = new Position(1, 0)
    const barEnd = new Position(1, 3)

    return editor
      .edit(builder => {
        builder.insert(new Position(0, 0), content)
      })
      .then(() => {
        editor.selections = [
          new Selection(fooStart, fooEnd),
          new Selection(barStart, barEnd)
        ]

        return uppercase.toUpperCase(editor)
      })
      .then(result => {
        assert.ok(result)
        assert.equal(editor.document.getText(new Range(fooStart, fooEnd)), 'FOO')
        assert.equal(editor.document.getText(new Range(barStart, barEnd)), 'BAR')
      })
  })
})
