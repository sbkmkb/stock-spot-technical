# Stock Spot Technical Test

## Setup

Create a `.env` file in the project directory and put in:

```
OMDB_API_URL=https://www.omdbapi.com/?apikey=8c5c6c5c
```

Then run:

```sh
yarn
yarn watch
```

This will run the parcel script to access your dev-server at http://localhost:1234 by default.

You can now run Cypress in order to test the component, which will visit your local host dev server at http://localhost:1234. Once you have the dev server running, you can run Cypress tests by doing the following in another terminal:

```sh
yarn test          # to run tests with Jest
yarn cypress run   # to directly run the Cypress tests
yarn cypress:open  # to open the Cypress dashboard
```

## Assumptions

1. I used Parcel as the bundler for this project. I normally use Webpack for production-size projects; however, given the small size and short development timeframe I find Parcel's zero-configuration settings make it easier to start building.
2. I believe that search-style queries benefit greatly from having URL persistence. Because of this, I decided to use `use-query-params` to help manage query persistence and state sharing. I think it works well for heavy use cases, but that a mixture of context and react router are better options for a more typical project.
3. Due to time constraints, I did not aim to achieve 100% test coverage – instead, I opted for a wider variety of tests – unit, integration and E2E (Cypress) – to demonstrate how I'd do each.
4. Implementing some responsive design, I've used a modal to contain the `MovieDetails` for smaller screens. There are elements of the mobile design that I feel could be done better given more time (proper viewport sizing, more fleshed out designs) but I feel that it is relatively adequate in its current state.
