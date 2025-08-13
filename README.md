# Rifky Paranrengi - Personal Portfolio
> [!IMPORTANT]  
> **Next.js Version Available**: A modern Next.js version with enhanced features is available on the [nextjs branch](https://github.com/rifk7s/webpro-afl3/tree/main). Check it out for improved performance and developer experience!

<p align="center">
  <img src="https://raw.githubusercontent.com/andregans/code_logotype/main/HTML%20Logotype.png" alt="HTML5 Logotype" width="200" style="margin-right: 55px; vertical-align: middle;">
  <img src="https://raw.githubusercontent.com/andregans/code_logotype/main/Javascript%20Logotype.png" alt="JavaScript Logotype" width="300" style="margin-right: 10px; vertical-align: middle;">
  <img src="https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/main/tailwind%20css/Tailwindcss.png" alt="Tailwind CSS Kawaii Logo" width="300" style="margin-right: 10px; vertical-align: middle;">
  <img src="https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/main/GitHub/GitHub.png" alt="GitHub Kawaii Logo" width="250" style="vertical-align: middle;">
  <br>
  <i>Image Copyright © <a href="https://github.com/andregans/code_logotype">andregans/code_logotype</a> and <a href="https://github.com/SAWARATSUKI/KawaiiLogos">SAWARATSUKI/KawaiiLogos</a>. All rights reserved.</i>
  <br>
  <i>Image used under permission from the copyright holder.</i>
</p>

A modern, responsive personal portfolio website showcasing my journey, projects, skills, and professional experience. Built with HTML5, Tailwind CSS, and vanilla JavaScript for optimal performance and accessibility.

> [!NOTE]  
> This portfolio is designed to be a clean, responsive, and accessible representation of my work. It's continuously updated as I learn and grow.



## 🚀 Live Demo

Visit the live portfolio: **[rifk7s.github.io/webpro-afl3](https://rifk7s.github.io/webpro-afl3/)**

## Features

-   **Responsive Design**: Adapts to various screen sizes (desktop, tablet, mobile).
-   **Dark Mode**: User-toggleable dark and light themes.
-   **Project Showcase**: Dedicated section for detailed project descriptions.
-   **Key Sections**:
    -   Home: A welcoming introduction.
    -   About: More about my background and skills.
    -   Projects: A gallery of my work.
    -   Contact: Ways to reach out to me.
-   **Modern UI**: Styled with Tailwind CSS for a clean and contemporary look.
-   **Interactive Elements**: Enhanced with JavaScript for a better user experience.
-   **Custom 404 Page**: A user-friendly "Page Not Found" experience.
-   **Performance Optimized**: Striving for fast load times and smooth interactions.

> [!TIP]
> Check out the live version of the portfolio [here](https://rifk7s.github.io/webpro-afl3/)! 

## Motivation

The primary motivation behind this portfolio is to create a central hub to:
-   Showcase my skills and projects to potential employers, collaborators, or anyone interested.
-   Document my learning and growth in web development.
-   Have a personal space on the internet that reflects my professional identity.

## Philosophy

This portfolio is built with the following principles in mind:
-   **Clarity**: Present information in a clear and concise manner.
-   **User-Centricity**: Prioritize a good user experience with intuitive navigation and accessibility.
-   **Simplicity**: Keep the design and codebase clean and maintainable.
-   **Continuous Improvement**: Regularly update and refine the portfolio with new projects and learnings.

## Project Structure (Tree)

Here's an overview of the project's file structure:

```
c:\Users\rifk\Desktop\WEBPRO\webpro-afl3\
├── .git/                   // Git version control files
├── .vscode/                // VS Code editor settings
├── img/                    // Site images
│   ├── 1737690544838.jpeg
│   ├── athirah.png
│   ├── atlantis.jpeg
│   ├── ciputra.png
│   └── nplc.png
├── node_modules/           // NPM packages
├── projects/               // Individual project details
│   ├── swing-java/
│   │   ├── swing-java.html
│   │   └── swing-java.png
│   └── webpro-afl/
│       ├── webpro-afl.html
│       └── webpro-afl1.png
├── src/                    // Source files
│   ├── input.css           // Tailwind CSS input file
│   └── output.css          // Compiled Tailwind CSS output
├── .gitignore              // Specifies intentionally untracked files that Git should ignore
├── 404.html                // Custom 404 page
├── about.html              // About Me page
├── contact.html            // Contact page
├── index.html              // Homepage
├── package.json            // NPM package manager file
├── projects.html           // Main projects listing page
├── README.md               // This file
├── script.js               // Main JavaScript file
└── tailwind.config.js      // Tailwind CSS configuration
```

> [!TIP]
> The main HTML files are at the root. The `src/` directory contains the Tailwind CSS input and its compiled output. Project-specific assets and pages are organized within the `projects/` directory.

## TODO Features

-   [ ] Add more detailed project case studies.
-   [ ] Implement a blog section.
-   [ ] Further optimize images and assets.
-   [ ] Add more animations or micro-interactions.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm (Node Package Manager) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository (if you haven't already):**
    ```sh
    git clone https://github.com/rifk7s/webpro-afl3.git
    cd webpro-afl3
    ```

2.  **Install NPM packages:**
    Navigate to the project directory in your terminal and run:
    ```sh
    npm install
    ```
    This command reads the `package.json`

### Running Tailwind CSS

To compile and watch your Tailwind CSS for changes, you can use the script defined in your `package.json`

```sh
npm run test
```
This command will run `npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch`, which processes your `src/input.css` file and outputs the compiled CSS to `src/output.css`. The `--watch` flag keeps the process running and automatically recompiles when you make changes to your input CSS or Tailwind configuration.

After running this, you can open the `index.html` or other HTML files in your browser to view the website.


## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/rifk7s/webpro-afl3)
![GitHub last commit](https://img.shields.io/github/last-commit/rifk7s/webpro-afl3)
![GitHub issues](https://img.shields.io/github/issues/rifk7s/webpro-afl3)
![GitHub stars](https://img.shields.io/github/stars/rifk7s/webpro-afl3)

---

<p align="center">
  <strong>Made with ❤️ by <a href="https://github.com/rifk7s">Rifky Paranrengi</a></strong>
  <br>
  <sub>⭐ Star this repo if you found it helpful!</sub>
</p>


