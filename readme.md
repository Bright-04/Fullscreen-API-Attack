# HTML5 Fullscreen API Attack Demo

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/Fullscreen-API-Attack)

> A demonstration of UI spoofing vulnerabilities using the HTML5 Fullscreen API for educational purposes.

This project demonstrates how malicious websites could potentially use the HTML5 Fullscreen API to create convincing UI spoofing attacks. Originally created by [Feross Aboukhadijeh](http://feross.org/html5-fullscreen-api-attack/) in 2012, this updated version serves as an educational resource to raise awareness about phishing techniques and browser security.

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

## Features

- **High-fidelity UI emulation:**
  - Accurately mimics modern browser interfaces
  - Adapts to the user's operating system (Windows, macOS, Linux)
  - Responsive design that handles arbitrary screen resolutions
  - Fluid UI animations and transitions

- **Advanced attack techniques:**
  - Works whether the user starts in fullscreen mode or not
  - Especially convincing when the user is already in fullscreen mode
  - Preloads all UI assets to prevent flashing/loading artifacts
  - Simulates browser chrome elements with pixel-perfect accuracy

- **Educational components:**
  - Detailed explanations of how the attack works
  - Information on how users can protect themselves
  - Browser security best practices

## Demo

Visit the [live demo](https://yourusername.github.io/Fullscreen-API-Attack/) to see the attack in action.

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Fullscreen-API-Attack.git

# Navigate to the project directory
cd Fullscreen-API-Attack

# Open index.html in your browser
```

## Usage

For educational purposes only:

1. Open the demo in your browser
2. Click the "Enter Fullscreen" button
3. Observe how the fake browser UI appears identical to a real browser
4. Press ESC to exit fullscreen mode

## Security Implications

This demonstration highlights why users should:

- Be cautious of websites requesting fullscreen permissions
- Look for the fullscreen notification message from their browser
- Remember that browsers display a warning when entering fullscreen mode
- Know how to exit fullscreen mode (typically ESC key)

## Mitigations

Modern browsers have implemented several mitigations:

- Clear notifications when entering fullscreen mode
- Requiring user interaction to enter fullscreen
- Keyboard shortcuts to exit fullscreen that cannot be overridden

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
