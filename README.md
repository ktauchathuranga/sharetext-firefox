# ShareText Firefox Extension

**ShareText** is a Firefox extension that allows you to quickly generate QR codes for selected text or URLs from your browser, making it easy to share content with your mobile devices.

## Features

- 📱 Generate QR codes from selected text with a right-click
- 🔗 Generate QR codes from right-clicked URL links
- 🔄 Automatically handles special characters and encoding
- ⚡ QR codes are generated instantly in a popup window
- 🎨 Clean, minimalist interface
- 🔒 Privacy-focused - all processing happens locally in your browser

## Screenshots

*QR code generation in action - right-click any selected text or link*

## Installation

### From Firefox Add-ons (AMO)
*Coming soon - extension under review*

### Manual Installation (For Development/Testing)

1. **Download the extension:**
   - Clone this repository: `git clone https://github.com/ktauchathuranga/sharetext-firefox.git`
   - Or download as ZIP and extract

2. **Load in Firefox:**
   - Open Firefox
   - Navigate to `about:debugging`
   - Click "This Firefox" in the sidebar
   - Click "Load Temporary Add-on..."
   - Select the `manifest.json` file from the extension folder

3. **For permanent installation:**
   - Package as `.xpi` file or wait for AMO approval

## How to Use

### For Text
1. **Select any text** on a webpage
2. **Right-click** on the selected text
3. Choose **"Share this text as QR code"** from the context menu
4. A popup window will open with the generated QR code
5. **Scan with your phone** to instantly access the text

### For Links
1. **Right-click on any link** on a webpage
2. Choose **"Share this link as QR code"** from the context menu
3. A popup window will open with the QR code for the URL
4. **Scan with your phone** to open the link on your mobile device

## Use Cases

- 📲 Share long URLs with your phone quickly
- 📝 Transfer text snippets between devices
- 🔗 Share links during presentations
- 📱 Quick mobile access to desktop content
- 🎯 Share content without typing on mobile

## File Structure

```
sharetext-firefox/
├── manifest.json          # Extension manifest
├── background.js          # Background script for context menus
├── popup.html            # QR code display page
├── popup.js              # QR code generation logic
├── icon.png              # Extension icon
├── libs/
│   ├── qrcode.js         # QR code library
│   └── qrcode.min.js     # Minified QR code library
└── README.md             # This file
```

## Technical Details

- **Manifest Version:** 2 (Firefox standard)
- **Permissions:** `contextMenus`, `activeTab`
- **Minimum Firefox Version:** 57.0
- **QR Code Library:** qrcode.js
- **No external dependencies** - works entirely offline

## Privacy

- ✅ All QR code generation happens **locally** in your browser
- ✅ **No data is sent** to external servers
- ✅ **No tracking or analytics**
- ✅ **No internet connection required** for QR code generation
- ✅ Only requires minimal permissions (`contextMenus`, `activeTab`)

## Development

### Prerequisites
- Firefox Developer Edition (recommended) or regular Firefox
- Basic knowledge of WebExtensions API

### Building
1. Clone the repository
2. Make your changes
3. Test using `about:debugging`
4. Package using `web-ext build` (if you have web-ext installed)

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Browser Compatibility

- ✅ **Firefox 57+** (Primary target)
- ✅ **Firefox for Android** (with context menu support)
- ⚠️ Chrome version available separately

## Troubleshooting

### QR Code Not Generating
- Make sure you have selected text or right-clicked on a link
- Check browser console for errors (`F12` → Console)

### Context Menu Not Appearing
- Ensure the extension is properly loaded
- Try reloading the webpage
- Check if the extension is enabled in `about:addons`

### Extension Not Loading
- Verify all files are present
- Check `manifest.json` syntax
- Look for errors in `about:debugging`

## Changelog

### v0.1.0
- Initial release
- Basic QR code generation for text and links
- Context menu integration
- Firefox Manifest V2 compatibility

## License

This project is open-source and available under the [MIT License](LICENSE).

## Support

- 🐛 **Report bugs:** [GitHub Issues](https://github.com/ktauchathuranga/sharetext-firefox/issues)
- 💡 **Feature requests:** [GitHub Issues](https://github.com/ktauchathuranga/sharetext-firefox/issues)
- 📧 **Contact:** [Your email or GitHub profile]

## Related Projects

- [ShareText Chrome Extension](https://github.com/ktauchathuranga/sharetext-chrome) - Chrome version

---

**Made with ❤️ for the Firefox community**

*If you find this extension useful, please consider giving it a ⭐ on GitHub!*
