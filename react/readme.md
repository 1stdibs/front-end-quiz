## 1stdibs.com front-end developer React quiz

Using React and Flux architecture render App with these pages:
- Browse - all the items on the page, [browse example](./examples/browse.png)
- Item - detail page with more info about the item, [item example](./examples/item.png)

### Server side notes
Steps to run local server:
- `npm install`
- `npm run dev`

At this point you should be able to access `localhost:3001` in your browser.

*Everything should work with Node `v4.0.0` and up.*

### Client side notes
Page entry JavaScript files are located in `app/entries` folder.

Webpack will compile all your CSS and JS assets.

### Requirements
**Browse page:**

- Fetch items data from server side using this endpoint: `[GET] /browse/data`
- Render items, example [layout](./examples/browse.png)
- Add `Load More` button, which should fetch additional items from the same endpoint

**Item page:**

- Fetch item data from server side using this endpoint: `[GET] /item/{id}/data`
- Render item, example [layout](./examples/item.png)

**Bonus points:**

- Add item favoriting:
  + Item can be added and removed to/from favorites from both pages by clicking on the `heart` icon
  + Its up to you were you store the data about favorited items (server, db, browser, file or your own solution)
  + Examples: [favorite on browse](./examples/favorite-browse.png) and [favorite on item](./examples/favorite-item.png)
- Client side routing: navigating through the app should work using browser history - single page application

**CSS:**

- You can use any framework or just write your own styles. Don't need to totally match given examples

### Tips
- You can use any [Flux framework](https://github.com/voronianski/flux-comparison)
- You can require your CSS files in your JavaScript [CSS Modules](https://github.com/css-modules/css-modules) are hooked up to Webpack
- You can use ES6 as [Babel](https://babeljs.io/) is integrated too
- You can change Webpack/Node configs as you like
