# HTML5 Fullscreen API Attack Demo: YouTube Spoof

![License](https://img.shields.io/badge/license-MIT-blue.svg)
> A demonstration of UI spoofing vulnerabilities using the HTML5 Fullscreen API to simulate a fake YouTube.com browsing experience.

This project demonstrates how malicious websites could potentially use the HTML5 Fullscreen API to create convincing UI spoofing attacks - specifically by simulating a user's browser accessing YouTube.com. Originally created by [Feross Aboukhadijeh](http://feross.org/html5-fullscreen-api-attack/) in 2012, this updated version serves as an educational resource to raise awareness about phishing techniques and browser security using YouTube as a high-value target example.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Security Implications](#security-implications)
- [Mitigations](#mitigations)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Ethical Usage Notice](#ethical-usage-notice)

## Features

- **High-fidelity UI emulation:**
  - Accurately mimics modern browser interfaces accessing YouTube.com
  - Replicates YouTube's navbar, search functionality, and video interface
  - Adapts to the user's operating system (Windows, macOS, Linux)
  - Responsive design that handles arbitrary screen resolutions
  - Fluid UI animations and transitions matching YouTube's design patterns

- **Advanced attack techniques:**
  - Works whether the user starts in fullscreen mode or not
  - Especially convincing when the user is already in fullscreen mode
  - Preloads all UI assets to prevent flashing/loading artifacts
  - Simulates browser chrome elements with pixel-perfect accuracy
  - Captures user interaction with fake YouTube elements
  - Simulates YouTube login screens to potentially harvest credentials

- **Educational components:**
  - Detailed explanations of how the YouTube spoofing attack works
  - Information on how users can identify fake YouTube interfaces
  - Browser security best practices when accessing video streaming sites
  - Red flags that differentiate the real YouTube from spoofed versions

## Demo

Visit the [live demo](https://Bright-04.github.io/Fullscreen-API-Attack/) to see the YouTube spoofing attack in action. The demo shows how a fake YouTube interface could be used to trick users into believing they're on the legitimate site.

## Installation

```bash
# Clone the repository
git clone https://github.com/Bright-04/Fullscreen-API-Attack.git

# Navigate to the project directory
cd Fullscreen-API-Attack

# Open index.html in your browser
```

## Usage

For educational purposes only:

1. Open the demo in your browser
2. Click the "Enter Fullscreen" button
3. Observe how the fake browser UI appears identical to a real browser displaying YouTube.com
4. Notice the spoofed YouTube elements including the search bar, video recommendations, and account interface
5. Try interacting with the fake YouTube elements to see how the attack could capture user input
6. Press ESC to exit fullscreen mode

## Security Implications

This demonstration highlights why users should:

- Be cautious of websites requesting fullscreen permissions
- Look for the fullscreen notification message from their browser
- Remember that browsers display a warning when entering fullscreen mode
- Know how to exit fullscreen mode (typically ESC key)
- Verify the URL in the address bar before entering YouTube credentials
- Check for HTTPS encryption when accessing YouTube
- Be wary of YouTube pages that behave differently than expected
- Look for subtle UI inconsistencies that might indicate a fake YouTube interface

## Mitigations

Modern browsers have implemented several mitigations:

- Clear notifications when entering fullscreen mode
- Requiring user interaction to enter fullscreen
- Keyboard shortcuts to exit fullscreen that cannot be overridden
- YouTube-specific security features like Google's sign-in protections
- Browser extensions that can help identify legitimate websites

## Contributing

Contributions to improve this educational demonstration are welcome:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Original project by [Feross Aboukhadijeh](http://feross.org)
- Thanks to all contributors who have helped improve this educational resource

## Ethical Usage Notice

This tool demonstrates a YouTube.com spoofing attack for educational and security awareness purposes only. Using this technique to deceive users, collect credentials, or distribute malicious content is illegal and unethical.
