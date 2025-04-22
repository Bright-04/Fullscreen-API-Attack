# HTML5 Fullscreen API Attack

A proof-of-concept demonstration showing how the HTML5 Fullscreen API could be used for phishing attacks by emulating browser UI.

Originally created in 2012 by Feross Aboukhadijeh (http://feross.org). More info: http://feross.org/html5-fullscreen-api-attack/

## About This Project

This project demonstrates a security vulnerability where malicious websites could use the HTML5 Fullscreen API to create fake browser interfaces that are indistinguishable from real ones, potentially tricking users into entering sensitive information like passwords or credit card details.

## How It Works

When a website enters fullscreen mode, it can hide the browser's native UI elements and present its own interface that mimics the appearance of a browser, complete with fake address bars, SSL indicators, and other UI elements that users trust. This could trick users into thinking they're on a legitimate website when they're actually interacting with a counterfeit interface.

## Current Status

**Important Note:** This project was created in 2012 and the browser UI emulation is now significantly outdated compared to modern browsers. The fake browser interfaces no longer match current browser designs, making the attack less convincing. However, the underlying concept remains relevant for educational purposes about web security.

## Features

- Emulates the user interface of:
  - Various browsers (Chrome, Firefox, Safari, etc.) as they appeared in 2012
  - Different operating systems (Windows, macOS)
  - Handles arbitrary screen resolutions through fluid UI images
- The attack demonstration works whether the user starts in fullscreen mode or not
  - It's particularly convincing when the user is already in fullscreen mode
- Includes preloading of all interface images in the background for a seamless experience without visual flashing

## Installation and Usage

1. Clone this repository
2. Open the HTML files in a web browser
3. Click the button to enter fullscreen mode
4. Observe how the fake browser UI appears, potentially fooling users

## Educational Purpose

This project is maintained for educational purposes only, to demonstrate the importance of:
- Being aware of the address bar and browser UI
- Understanding how fullscreen mode works
- Recognizing potential phishing techniques

## License

MIT
