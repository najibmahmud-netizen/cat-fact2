Author: Najib Mahmud

# Cat Facts Explorer

A simple web project that delivers cat facts using HTML, CSS, and vanilla JavaScript.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Pages Overview](#pages-overview)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## installation

Follow these steps to run the project locally:

Clone the repository:
git clone git@github.com:najibmahmud-netizen/cat-fact2.git
Navigate into the project folder:
cd yourproject
Install dependencies:
npm install

## Usage

To run the project:

Open in your browser

To run tests:

npm test

Open the project in your browser to view the responsive cat breed layout.



## Overview

This repository contains a small website with three pages:
- `index.html`: Home page with a welcome message action.
- `facts.html`: Fetches random cat facts from a public API.
- `about.html`: Describes the project and learning goals.

The application uses `script.js` for DOM logic and API calls, and `style.css` for layout and styling.

## Features

- Fetches random cat facts from `https://catfact.ninja/fact`
- Handles loading state and API errors
- Works in the browser without frameworks
- Includes a basic test setup with Jest

## Project Structure

- `index.html` - landing page
- `facts.html` - cat facts page
- `about.html` - project information
- `script.js` - application logic and API interaction
- `style.css` - styling for all pages
- `package.json` - project metadata and scripts
- `test/app.test.js` - Jest test file

## Technologies Used

This project was built using:

- **HTML5** - Structure of the webpage 
- **CSS3** - Styling and layout 
- **Flexbox** - Responsive layout design 
- **Media Queries** - Mobile responsiveness 
- **Jest** - Testing framework for CSS validation 

## Contributing

Contributions are welcome!

Fork the repository
Create a new branch:
git checkout -b feature-name
Make your changes
Push your branch:
git push origin feature-name
Open a pull request

## License

This project currently does not have a license.


This project is ideal for beginners learning:

CSS Flexbox
Responsive design
Basic UI styling
Writing clean and testable CSS


## Notes

The fetch logic is implemented in `getCatFact()` and exported for testing. The site is built for learning frontend fundamentals and API interaction.
