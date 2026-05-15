import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	const disposable = vscode.commands.registerCommand(
		'smart-semicolon.smartSemicolon' ,
		async () => {
			const editor = vscode.window.activeTextEditor;

			if (!editor) {
				return;
			}

			const document = editor.document;
			const position = editor.selection.active;
			const line = document.lineAt(position.line);
			const lineText = line.text;

			if (lineText.trim() === '') {
				await editor.edit(editBuilder => {
					editBuilder.insert(position, ';');
				});
				return;
			}

			//Detect if cursor it inside a for loop declaration
			const beforeCursor = lineText.substring(0, position.character);

			const insideForLoop = 
				beforeCursor.includes('for(') ||
				beforeCursor.includes('for(');
			
			if(insideForLoop) {
				//Normal semicolon behaviour
				await editor.edit(editBuilder => {
					editBuilder.insert(position, ';');
				});
				return;
			}

			// Move to end of line
			const endPosition = new vscode.Position(
			position.line,
			lineText.length
			);

			const trimmed = lineText.trimEnd();

			await editor.edit(editBuilder => {

				// Add semicolon only if missing
				if(!trimmed.endsWith(';')) {
					editBuilder.insert(endPosition, ';');
				}
			});

			// Move cursor to end
			editor.selection = new vscode.Selection(endPosition, endPosition);

			//Insert newline
			await vscode.commands.executeCommand('editor.action.insertLineAfter');
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}