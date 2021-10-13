# Full Stack Coding Challenge

Help! Through an unfortunate accident in our lab, we've lost all of the code. We need your help to rebuild from scratch as quickly as possible!

The client app and the backend are written entirely in Typescript, using React in the frontend and Node.js for the backend. We've built an MVP template, but need your help implementing one of the most requested features - _Contract Discounts_

Please spend only up to two hours implementing the frontend and backend for the contract discount feature. **Important** — when you're done:

- Remove the `node_modules` folder
- Remove `dist folder` from server folder
- Zip up this directory
- Edit the last section of this README file with a short blurb telling us what tradeoffs you made (if any) and how you might improve your solution and any other outstanding thoughts.
- Submit it back to us

## Task details

- Users should be able to see all of their contracts in a table format with key information called out in the columns
- On contract click users should be brought to a modal that shows them specific contract details
- Within this modal will live a magic button, when clicked \$500 gets immediately shaved off of the contract ( That is the magical experience! )
- This magical experience is not complete unless both frontend and backend are updated.
- For the simplicity of this exercise we are only using an in memory object on the backend where we would normally be using a DB.

## Running locally

- `npm i` — Installs dependencies
- `npm start:frontend` — Starts the frontend code
- `npm start:server` — Starts the server

You can run each of these commands in different terminals

## Tradeoffs and follow-ups

1. The biggest trade-off I made was definitely leaving the project without tests - I wouldn't open such a PR in a production codebase without them. On the upside, it was really nice to remember how helpful the type system can be and while that's not a good enough excuse for not writing tests, it did catch a couple of bugs during development.
2. I tried to showcase bits of functional programming in the code and how using a couple of FP structures (or, dare I say, monads) can lead to well-typed, safe and clear code. When reading, just bare in mind that the `bind` I use in the code is simply a `flatMap` and not the regular JavaScript `bind`.
3. I considered two models for the frontend-backend communication:
  1. The frontend sends a request to update a resource on the backend, then refetches the state (e.g. all contracts) and reactively re-renders affected components
  2. The frontend sends a request to update a resource on the backend, then manually changes the state on the frontend and re-renders affected components

  The choice is a tradeoff between used resources and application complexity. I think the first model leads to simpler code but requires more calls to the backend. While it is an important choice for bigger, more complex apps with many users, I think both of these models are fine with an application this size. Anyway, I ended up implementing model 2.
4. I didn't have a specific file structure in mind for backend or frontend, most of it evolved quite naturally as files grew and I extracted bits of logic from them. At one moment I thought about organizing the files better but then figured that could become a rabbit hole (see [this repo](https://github.com/przemyslawhaptas/node-app-template) for an example DDI-sh project structure I played with).
5. When it comes to code style, I tried to keep my own code consistent but didn't go as far as to edit the rest of the project. I'd prepare a solid eslint rules file and run an autolint if I had more time.
6. I don't think styles (CSS) is my forte, so I didn't spend much time styling the app. There's some inline styles (sometimes duplicated) as well as regular stylesheets imported as modules, all in all this could be cleaned a bit.
