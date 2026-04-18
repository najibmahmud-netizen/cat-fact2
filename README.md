Author: Najib Mahmud
# Cat Facts Explorer

A simple web project that delivers cat facts using HTML, CSS, and vanilla JavaScript.

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

## Notes

The fetch logic is implemented in `getCatFact()` and exported for testing. The site is built for learning frontend fundamentals and API interaction.
