# Django LiveView Frontend

Django LiveView Frontend is a set of JavaScript functions that are responsible form managing everything that a backend developer would do.

## What elements does it manage?

- WebSocket connection.
- Events.
- Submit actions.
- Capture the responses from the backend and place the HTML in the indicated place.
- Form submission.
- History management.
- Show the page offline in case you lose your internet connection.

## How does it work?

Events are manage by Stimulus, a JavaScript framework that allows you to create controllers that are responsible for managing a specific part of the DOM. The rest of the code is written in plain JavaScript.

## Install

### Option 1: CDN

Add the following line to your HTML.

```html
<script defer type="module" src="https://cdn.jsdelivr.net/gh/Django-LiveView/frontend/js/main.js"></script>
```

### Option 2: Manual

You only need to download the `js` folder and link `main.js` in your HTML file.

```html
<script defer type="module" src="js/main.js"></script>
```
