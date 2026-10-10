# No AI Google Search

No AI Google Search is a Chrome extension designed to enhance your Google search experience by disabling AI-generated previews. This extension automatically removes AI Previews Google searches to ensure you get the classic search results without AI Previews.

## Fork Notes

Google at some point stopped the method of appending -ai at the end of the search from working reliably. However, adding &udm=14 tag tell the search engine you only want web results. I have updated in this fork to instead check for and append &udm=14 to the URL rather than checking and appending -ai on the query.

It ensures to not interfere with other udm=## modes of Google and the default dpr=1 mode

Additionally since people may sometimes want to do an AI search, to avoid the need to go in and disable the plugin every time you would want to do that, simply add the keyword "giveai" at the end of your search string and it will then strip that out and call the dpr=1 mode instead of the udm=14 mode. (Note: if you've already searched and it appended udm=14 you will need to click the "All" on the webpage as it won't strip back out the udm=14 until you've done that, but if you search from Chrome or Opera search bar with giveai in the query it'll strip that and put you in default mode)

## Features

- **Disable AI Previews:** Automatically reviews Google's new AI-generated previews.
- **Seamless Integration:** Integrates smoothly in the background with your Google searches without requiring manual adjustments.


## Installation

### Chrome Web Store

I haven't put it up on the Chrome Web Store at this time, I'm not normally a developer so I don't have a Chrome developer account. Use manual installation method to install this.

### Manual Installation

1. Download the extension files from the [GitHub repository](https://github.com/openchampagne/No-AI-Google-Search/releases).
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on the "Load unpacked" button and select the directory where you downloaded the extension files.

## Usage

Once installed, the extension will remove nodes that belong to Google's AI previews. 