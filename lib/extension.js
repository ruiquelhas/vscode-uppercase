const { Range, commands } = require('vscode')

function activate (context) {
  const disposable = commands.registerTextEditorCommand('uppercase.toUpperCase', toUpperCase)

  context.subscriptions.push(disposable)
}

function toUpperCase (editor) {
  return editor.edit(builder => {
    editor.selections.forEach(selection => {
      const range = new Range(selection.start, selection.end)
      const text = editor.document.getText(range) || ''
      const matches = text.match(/(?=.*[a-zA-Z]).+/g)

      if (!matches || !matches.length) {
        return
      }

      builder.replace(selection, text.toUpperCase())
    })
  })
}

function deactivate () {

}

module.exports = { activate, toUpperCase, deactivate }
