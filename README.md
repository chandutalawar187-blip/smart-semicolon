# Smart Semicolon

[![VS Code Marketplace](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=smartsemicolon.smart-semicolon)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Issues](https://img.shields.io/github/issues/smartsemicolon/smart-semicolon)]([https://github.com/smartsemicolon/smart-semicolon/issues](https://github.com/chandutalawar187-blip/smart-semicolon.git)/issues)
[![GitHub Stars](https://img.shields.io/github/stars/smartsemicolon/smart-semicolon)]([https://github.com/smartsemicolon/smart-semicolon](https://github.com/chandutalawar187-blip/smart-semicolon.git))

A lightweight VS Code extension that intelligently appends semicolons and advances to the next line using a custom keyboard shortcut, without interfering with normal semicolon typing.

## Overview

**Smart Semicolon** provides a non-intrusive way to quickly terminate statements and move to the next line in semicolon-based languages. By using a dedicated keyboard shortcut (`Alt+;`), the extension preserves your natural typing experience while offering a powerful productivity boost for languages like JavaScript, TypeScript, C/C++, and Java.

## Features

- **Intelligent Semicolon Insertion**: Automatically appends a semicolon at the end of the current line
- **Cursor Advancement**: Moves the cursor to the beginning of the next line in a single action
- **Non-Intrusive**: Does not hijack or modify normal semicolon (`;`) typing behavior
- **Loop-Safe**: Intelligently avoids breaking `for(;;)` and similar loop constructs
- **Custom Shortcut**: Fully customizable keyboard binding (default: `Alt+;`)
- **Language Support**: Works with C, C++, JavaScript, TypeScript, Java, and similar syntax languages
- **Zero Configuration**: Works out of the box with sensible defaults

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **Smart Semicolon**
4. Click **Install**
5. Reload VS Code if prompted

### From GitHub

Clone the repository and install locally:

```bash
git clone https://github.com/smartsemicolon/smart-semicolon.git
cd smart-semicolon
npm install
npm run compile
code --install-extension smart-semicolon-*.vsix
```

## Quick Start

### Default Keyboard Shortcut

Press `Alt+;` to:
1. Insert a semicolon at the end of the current line (if not already present)
2. Move to the next line
3. Position the cursor at the appropriate indentation level

### Example Usage

#### Before (cursor at end of `name`)

```javascript
const name = "John"
```

#### After Pressing `Alt+;`

```javascript
const name = "John";
|
```

#### Another Example: Function Declaration

**Before** (cursor anywhere on the line):

```typescript
function greet(message: string)
```

**After** `Alt+;`:

```typescript
function greet(message: string);
|
```

## Extension Philosophy

### Why Normal Semicolon Typing is Preserved

This extension is built on a simple principle: **productivity enhancements should enhance, not replace, your existing workflow**.

Here's why we don't hijack the regular semicolon key:

1. **Muscle Memory**: Developers have years of muscle memory around typing semicolons normally. We respect that.
2. **Flexibility**: Sometimes you want to type a semicolon without advancing (e.g., within a comment or string). A dedicated shortcut gives you that choice.
3. **Predictability**: The extension only acts when you explicitly invoke it via `Alt+;`. Normal typing remains entirely under your control.
4. **Language Diversity**: In mixed-language projects, normal typing behavior stays consistent across all file types.

By using a dedicated shortcut, Smart Semicolon becomes a **power tool** you opt into rather than an automatic behavior you must work around.

## Configuration

### Customizing the Keyboard Shortcut

You can rebind the shortcut to your preference:

1. Open VS Code Settings (`Ctrl+,` / `Cmd+,`)
2. Search for **Smart Semicolon**
3. Modify the **Keyboard Shortcut** setting or use `keybindings.json`:

```json
{
  "key": "shift+;",
  "command": "smartsemicolon.insertSemicolonAndNewline",
  "when": "editorTextFocus && !editorReadonlyMode"
}
```

### Extension Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `smartSemicolon.insertAtEOL` | `true` | Insert semicolon at end of line |
| `smartSemicolon.advanceToNextLine` | `true` | Move cursor to next line |
| `smartSemicolon.respectLoops` | `true` | Avoid breaking `for(;;)` constructs |

## Supported Languages

Smart Semicolon works best with curly-brace and semicolon languages:

- **JavaScript & TypeScript** ✓
- **Java** ✓
- **C / C++** ✓
- **C#** ✓
- **Go** ✓
- **Kotlin** ✓
- **Rust** ✓
- **Swift** ✓

It will not interfere with languages like Python, Ruby, or YAML that don't use semicolons.

## Known Limitations

- **Template Literals / Strings**: If the cursor is inside a string or template literal, the semicolon is still appended (this is intentional; use normal `;` typing for in-string semicolons)
- **Multiline Statements**: The extension always appends at the visual end of the current line; for complex multiline constructs, manual positioning may be needed
- **Comments**: Semicolons appended within line comments will be visible (typically harmless in most languages)

## Troubleshooting

### Shortcut Not Working

1. **Check keybinding conflicts**: Open Command Palette (`Ctrl+Shift+P`) and type "Open Keyboard Shortcuts" to view active bindings
2. **Verify focus**: The shortcut only works when editing a file (not in the Terminal or Debug Console)
3. **Reload**: Try reloading the window (`Ctrl+R`)

### Unwanted Semicolons in Specific Contexts

If you find the extension inserting semicolons where they shouldn't be:

1. Open an issue with a code example
2. Consider using normal `;` typing instead for those specific cases
3. Adjust the `smartSemicolon.respectLoops` setting if needed

### Extension Appears Disabled

Ensure the extension is enabled in your VS Code extensions panel and that `"smartsemicolon.enabled"` is not set to `false` in your settings.

## Roadmap

We're committed to improving Smart Semicolon. Upcoming features and enhancements include:

- **v1.1**: Enhanced loop detection for nested and complex control structures
- **v1.2**: Context-aware indentation analysis (smart indent on new line)
- **v1.3**: Per-language configuration profiles
- **v1.4**: Status bar indicator showing semicolon count per line
- **v2.0**: Bracket matching and multi-statement line handling

See [GitHub Issues](https://github.com/smartsemicolon/smart-semicolon/issues) for the full feature backlog and to vote on upcoming enhancements.

## Contributing

We welcome contributions! Whether it's bug fixes, feature requests, or documentation improvements, your input helps make Smart Semicolon better.

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/smart-semicolon.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature`
5. Make your changes and test: `npm run test`
6. Commit with clear messages: `git commit -m "feat: describe your change"`
7. Push and open a Pull Request

### Development Setup

```bash
npm install           # Install dependencies
npm run compile       # Compile TypeScript
npm run test          # Run test suite
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
npm run package       # Package as .vsix
```

### Code Style

- Use **TypeScript** for type safety
- Follow **ESLint** and **Prettier** standards (enforced in CI)
- Write tests for new features in the `test/` directory
- Update documentation for significant changes

### Reporting Issues

Please use [GitHub Issues](https://github.com/smartsemicolon/smart-semicolon/issues) to report bugs. Include:

- VS Code version (`About VS Code`)
- Extension version
- Minimal reproducible example
- Expected vs. actual behavior

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Support

- **Report a Bug**: [GitHub Issues](https://github.com/smartsemicolon/smart-semicolon/issues)
- **Request a Feature**: [GitHub Discussions](https://github.com/smartsemicolon/smart-semicolon/discussions)
- **Documentation**: [Wiki](https://github.com/smartsemicolon/smart-semicolon/wiki)

## Acknowledgments

Smart Semicolon was built with:

- [VS Code Extension API](https://code.visualstudio.com/api)
- [TypeScript](https://www.typescriptlang.org/)
- Inspired by productivity-focused development practices

---

**Happy coding!** 🚀
