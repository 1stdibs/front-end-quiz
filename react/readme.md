## 1stdibs.com front-end developer React quiz

Using React and Flux architecture render Single Page Application with these pages:
- Browse - all the items on the page, [browse example](./examples/browse.png)
- Item - detail page with more info about the item, [item example](./examples/item.png)

### Server side notes
Steps to run local server:
- `yarn install` - install dependencies
- `yarn start` - run webpack server
- `yarn dev` - run Express.js server

At this point you should be able to access `localhost:3000` in your browser.

*Everything should work with Node `v8.0.0` and up.*

### Client side notes
Page JavaScript files are located in `/src` folder.

Webpack will compile all your CSS and JS assets.

### Requirements
**Browse page:**

- Fetch items data from server side using this endpoint: `[GET] /browse`
- Render items, example [layout](./examples/browse.png)
- Add `Load More` button, which should fetch additional items from the same endpoint

**Item page:**

- Fetch item data from server side using this endpoint: `[GET] /item/{id}`
- Render item, example [layout](./examples/item.png)

**Bonus points:**
Add item favoriting:
- Item can be added and removed to/from favorites from both pages by clicking on the `heart` icon
- Favorited items should be stored server side (db, file or your own solution)
- Examples: [favorite on browse](./examples/favorite-browse.png) and [favorite on item](./examples/favorite-item.png)

### Other Notes:
- Initial App setup is done with [Create React App](https://github.com/facebookincubator/create-react-app)
- We prefer React code written with function components and [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- You can use ES2020 language features
- You can change Create React App or Express.js configs/setup as you like
- You can use any framework for CSS or just write your own styles. Don't need to totally match given examples
