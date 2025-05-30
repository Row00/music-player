# Discrete Notepad Music Player

**🎵 A fully functional music player disguised as Windows Notepad**

A sophisticated, obfuscated music player that appears to be a simple Windows Notepad application while secretly providing a complete music listening experience with professional controls and security features.

## 🎯 Overview

The Discrete Notepad Music Player is designed to provide private music listening while maintaining complete stealth. To anyone observing, it appears as a legitimate Windows Notepad application for taking notes, while secretly containing a full-featured music player with your personal music library.

## ✨ Key Features

### 🎵 Complete Music Experience
- **52-track music library** with Metro Boomin, The Weeknd, and Bad Bunny
- **Click-to-play playlist** with scrollable track selection
- **Professional controls**: Play/Pause, Previous/Next, Shuffle, Repeat
- **Volume control** with percentage display
- **Progress bar** with click-to-seek functionality
- **Real-time track information** display

### 🥷 Perfect Disguise
- **Authentic Windows Notepad appearance** - Identical UI/UX
- **Functional notepad** - Actually works for taking notes
- **Auto-save text** - Your notes are preserved
- **Word count display** - Shows document statistics
- **Standard menu system** - File, Edit, View, Help menus

### 🔒 Advanced Security
- **Heavy code obfuscation** - Multiple encryption layers
- **Developer tools blocking** - F12, Ctrl+Shift+I, Ctrl+U disabled
- **Anti-debugging protection** - Detects analysis attempts
- **Console manipulation** - Automatic evidence clearing
- **Right-click disabled** - Prevents source inspection

## 🚀 Quick Start

### Installation
1. Download or clone the repository
2. Ensure your music files are in `assets/music/` folder
3. Open `index.html` in any modern browser
4. Enjoy your discrete music experience!

### Accessing the Music Player
- **Method 1**: Press `Ctrl+M` while in the notepad
- **Method 2**: Click the **Help** menu item
- **To hide**: Press `Ctrl+M` again or click outside the controls

## 🎵 Your Music Library (52 Tracks)

### Metro Boomin
- Too Many Nights (feat. Don Toliver & Future)

### The Weeknd - After Hours Album (14 tracks)
- After Hours, Alone Again, Blinding Lights, Escape From LA, Faith
- Hardest To Love, Heartless, In Your Eyes, Repeat After Me (Interlude)
- Save Your Tears, Scared To Live, Snowchild, Too Late, Until I Bleed Out

### Bad Bunny - DeBÍ TiRAR MáS FOToS Album (16 tracks)
- BAILE INOLVIDABLE, BOKETE, CAFÉ CON RON, DtMF, EL CLUB
- EoO, KETU TECRÉ, KLOUFRENS, LA MUDANZA, LO QUE LE PASÓ A HAWAII
- NUEVAYOL, PERFUMITO NUEVO, PITORRO DE COCO, TURISTA, VELDÁ
- VOY A LLEVARTE PA PR, WELTITA

### Additional Collection (21+ tracks)
- Various artists and additional tracks

## ⌨️ Keyboard Shortcuts

### Music Controls (when player is visible)
- `Ctrl+M` - Toggle music player visibility
- `Space` - Play/Pause (when not typing in notepad)
- `←` / `→` - Seek backward/forward 10 seconds
- `Ctrl+←` / `Ctrl+→` - Previous/Next track
- `↑` / `↓` - Volume up/down (5% increments)

### Notepad Functions
- `Ctrl+A` - Select all text
- `Ctrl+C` - Copy selected text
- `Ctrl+V` - Paste text
- `Ctrl+Z` - Undo (browser default)

## 🛡️ Security Features

### Anti-Detection Measures
- **Code Obfuscation**: Multiple layers of string encryption and variable name obfuscation
- **Console Clearing**: Automatic clearing of browser console every 20 seconds
- **Fake Logging**: Displays legitimate "Text Document Editor" messages
- **Developer Tools Blocking**: Prevents F12, inspect element, and view source
- **Context Menu Disabled**: Right-click functionality completely blocked

### Performance Optimizations
- **Fast Loading**: Optimized initialization for <1 second load time
- **Lightweight Security**: Essential protection without performance impact
- **Efficient Memory Usage**: Optimized for long-term use
- **Background Monitoring**: Minimal overhead security checks

## 📁 Project Structure

```
discrete-notepad-player/
├── index.html                    # Main notepad interface
├── assets/
│   ├── css/
│   │   └── notepad-style.css     # Windows Notepad styling
│   ├── js/
│   │   └── notepad-player.js     # Obfuscated music player
│   └── music/                    # Your music library (52 tracks)
│       ├── 03 Too Many Nights (feat. Don Toliver & Future).mp3
│       ├── [SPOTDOWNLOADER.COM] After Hours.mp3
│       ├── [SPOTDOWNLOADER.COM] Blinding Lights.mp3
│       └── [... 49 more tracks ...]
└── README.md                     # This documentation
```

## 🔧 Customization

### Adding Your Own Music
1. Place your music files in the `assets/music/` folder
2. Edit the `_library` array in `notepad-player.js`
3. Add your tracks with proper metadata:
```javascript
{
    src: './assets/music/your-song.mp3',
    title: 'Your Song Title',
    artist: 'Artist Name',
    album: 'Album Name'
}
```

### Customizing Appearance
- Edit `assets/css/notepad-style.css` to modify the notepad appearance
- Maintain Windows-like styling for authenticity
- The music player controls inherit the notepad theme

## 🎭 Use Cases

### Perfect For:
- **Private music listening** in shared spaces
- **Office environments** where music apps aren't allowed
- **Study sessions** where you need both notes and music
- **Stealth entertainment** during meetings or classes
- **Personal privacy** when you don't want others to know you're listening to music

### Scenarios:
- Taking meeting notes while listening to background music
- Study sessions with discrete music playback
- Office work with hidden entertainment
- Public spaces where music player visibility isn't desired

## 🌐 Browser Compatibility

### Fully Supported
- **Chrome 90+** (Recommended)
- **Firefox 88+**
- **Safari 14+**
- **Edge 90+**

### Requirements
- JavaScript enabled
- HTML5 audio support
- Local file access (for music files)
- Modern CSS support

## 🔊 Audio Formats Supported

- **MP3** (Primary format)
- **M4A** (Apple/iTunes format)
- **WAV** (Uncompressed)
- **OGG** (Open source format)

## 🚨 Important Notes

### Legal Considerations
- Only use music you own or have legal rights to play
- This is for personal use only
- Respect copyright laws in your jurisdiction

### Privacy & Security
- Music files are stored locally - no cloud streaming
- No data collection or external connections
- All processing happens in your browser
- Notes are saved locally in browser storage

### Performance Tips
- Keep music files under 10MB each for best performance
- Close other browser tabs for optimal playback
- Use Chrome for the best experience
- Ensure sufficient system RAM for smooth operation

## 🛠️ Troubleshooting

### Common Issues

**Music not playing:**
- Check if files exist in `assets/music/` folder
- Verify file format compatibility
- Try refreshing the page
- Check browser console for errors (if accessible)

**Player not appearing:**
- Press `Ctrl+M` or click Help menu
- Ensure JavaScript is enabled
- Try in a different browser
- Clear browser cache and reload

**Slow loading:**
- Check music file sizes (optimize if >10MB)
- Close unnecessary browser tabs
- Restart browser if needed
- Check system resources

**Security features not working:**
- Some browser extensions may interfere
- Try in incognito/private mode
- Disable ad blockers temporarily
- Check if browser security settings are too strict

## 🔄 Version History

### v3.0 (Current) - Optimized & Secure
- ⚡ Fast loading (<1 second)
- 🛡️ Advanced security features
- 🎵 52-track music library
- 🖱️ Click-to-play playlist
- 🔀 Shuffle and repeat modes
- 📱 Responsive design

### v2.0 - Enhanced Features
- Added Bad Bunny album
- Improved playlist interface
- Enhanced security measures
- Better performance optimization

### v1.0 - Initial Release
- Basic music player functionality
- Windows Notepad disguise
- Essential security features
- Core obfuscation

## 📞 Support

### If you encounter issues:
1. Check the troubleshooting section above
2. Verify your browser compatibility
3. Ensure music files are in correct format and location
4. Try refreshing the page or restarting your browser

### For advanced users:
- Inspect the obfuscated code at your own risk (security features will activate)
- Modify the music library array to add your own tracks
- Customize CSS for different visual themes

## 📄 License

**Personal Use Only**

This project is for educational and personal use. Feel free to modify and adapt for your own needs, but please respect copyright laws regarding music files and don't use this for any malicious purposes.

## 🏆 Credits

**Created for discrete music enjoyment**
- Designed to look exactly like Windows Notepad
- Advanced obfuscation and security features
- Optimized for stealth and performance
- Perfect balance of functionality and discretion

---

**🤫 Remember: To anyone watching, you're just taking notes in Notepad!**

*Enjoy your discrete music experience!* 🎵📝
