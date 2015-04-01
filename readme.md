### 1stdibs.com front-end developer candidate quiz ###

Using Backbone and jQuery take `item.json` and render a form similar to the form illustrated in `1stdibs_fe_quiz.jpg`.

Certain fields ("materials" dropdown, radio button groups) require enumerations that can be found in the `enums.json` file.

#### item.json ####

This file is a very simplified version of the 1stdibs item model. An item is simply a thing that is available for sale on 1stdibs.com. 

1stdibs.com private internal APIs return models wrapped in a common wrapper with the model residing in the `result` property.

#### validations ####

No validation is required for this quiz. There is one state condition that is required. The condition is that part of the form be disabled until the user selects an option in another field. See `1stdibs_fe_quiz.jpg` for the details.

#### CSS ####

Feel free to use Twitter Bootstrap to match the style in the jpeg example.

#### Requirements ####

1. `item.json` must be loaded via AJAX (asynchronous of the page load; you'll want to have a development web server running). `enums.json` isn't required to be loaded asynchronously, it may be "bootstrapped" on page load.

1. The form must be built dynamically by combining the values in the item model with enumerations in the enums.json file. Other form elements (labels, etc) may be hard-coded into HTML and/or templates.

1. The user should be able to update and edit all form fields.

1. Pressing the Save button should dump an updated and/or edited item.json to the browser console to demonstrate that it could be persisted to the server.

1. As mentioned earlier, there is a state condition that must be handled. See `1stdibs_fe_quiz.jpg` for the details. 

#### Tips ####

1. The purpose of the quiz is to demonstrate your understanding of key Backbone concepts: models, views and templates. One other key concept, routers, aren't encompassed in this quiz.

2. Stay away from one monolithic view/template.

3. Out-of-the-box, Backbone doesn't handle nested models.

#### Resources ####
* [Backbone](http://backbonejs.org/) - Backbone documentation
* [Underscore](http://underscorejs.org/) - Underscore documentation (many Underscore methods are mixed into Backbone collections)
* [Backbone Fundamentals](http://addyosmani.github.io/backbone-fundamentals/) - A book on Backbone.js for beginners and advanced users alike
* [JavaScript Design Patterns](http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/) - A free ebook discussing general JavaScript design patterns
