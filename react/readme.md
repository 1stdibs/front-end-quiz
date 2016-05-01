## Comments

Hello!

I have spent about 30% of my time trying to get acquainted with Flux and Webpack. I had trouble getting started, so I made a few tweaks to the initial package so that I would end up in familiar waters.

- The server is now a very simple REST server, it only renders the entry HTML and everything else is loaded via AJAX. Seeing your initial set up I thought that I could perhaps use server side rendering but I decided not to go there. I wouldn't have made it on time.
- I have added a few plugins here and there. Perhaps they were not necessary but since I was unfamiliar with 70% of the starting package anyway, I hope that's not too big a deal.

By no means is my approach optimal or complete. Things I could've done but haven't due to time constraints include:

- Internationalization.
- Extracting certain pieces of repeating logic. E.g. my action handlers are "created dynamically". The method, which performs this initialization should be a generic method somewhere else. I didn't do that since I would need to mess with module loading or come up with something different. That would be the next step in the process.
- Creating a proper REST service map, similar to what a Spring application might use.

Development notes:

- I should've used a 3rd party router but I knew that it would have taken me half the day to find my favourite and then set it up. So I wrote something of my own. That's why the browser's back button doesn't work - because it's not a real router. Using one would be the next step.
- The service calls could have been parts of Actions, but I chose using Stores for that. Probably due to model resemblence.
- Clearly I don't understand the architecture well enough yet. I see a lot of redundant code from one Store to another, from one Action controller to the next. I think that this can either be greatly simplified or I could easily be doing things wrong.
- CSS Modules were also new, so the structure in which I have chosen to place my files may not be the best one. Actually, the whole folder structure is questionable, IMO.