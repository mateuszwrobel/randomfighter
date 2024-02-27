# Running the app
## Prerequisites
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/en/)
- [Pnpm](https://pnpm.io/)
## Running the app
1. Clone the repository
2. Run `pnpm install` in the root directory
3. Run `docker-compose up` in the root directory
4. Run `ts-node migrate-up.ts` in the `database/src/lib/scripts` directory
5. Run `ts-node seed-up.ts` in the `database/src/lib/scripts` directory
6. Run `pnpm nx run-many -t serve -p api frontend` in the root directory (sometimes you need to restart it because of the jest error
7. Open `http://localhost:4200` in your browser
8. Have fun!

## Running the tests
1. Run `pnpm nx e2e frontend --ui` in the root directory for frontend e2e tests (`api` app must be working)
2. Run `pnpm nx run starship-views:storybook` to run storybook for starship-views (`api` app must be working)
3. Run `pnpm nx test starships-api` to run unit tests for starships-api module

# Development
- [x] use next.js
- [x] use typescript
- [x] use graphql
- [x] use angular
- [x] use angular material
- [x] use postgres
- [ ] use swagger/openapi
- Starship module
  - [x] add starships module
  - [x] add starships entity
  - [x] add starships table in database
  - [x] add starships POST endpoint
  - [x] add starships GET endpoint
  - [x] add starships PUT endpoint
  - [x] add starships DELETE endpoint
  - [ ] add pagination
  - [ ] select random starship
  - [x] add details view

        The app should render the attributes from the resource in a simple web page
  - [x] add starship vs starship view
  - [x] add compare starship view with information about the winner
      
        Once two cards are displayed, the app should declare one of the cards a winner based on the higher common attribute.
        Having displayed the winning card, the user should be able to play
  - [x] add score counter
        
        Score counter. If there are two players, left and right, show how many times each side has won
  - [x] add option to select which resource to play against
  
## Further development
- [ ] add better configs for apps urls and databases
- [ ] explore unit tests for signalStore with rxMethod (currently tests don't work when combining signals with rxjs)
- [ ] improve frontend e2e tests for CI
- [ ] add unit tests in storybook
- [ ] add players module to allow persisting players and their scores
- [ ] add authentication
- [ ] add CI/CD
- [ ] add docker-compose for development
- [ ] add e2e integration tests for api
- [ ] add error handling


# Architecture
## Frontend
- [x] use Angular 17.2
  - [x] use signals
  - [x] use signalStore from ngrx
  - [x] use input signals
  - [ ] use [custom store features](https://ngrx.io/guide/signals/signal-store/custom-store-features#example-1-tracking-request-status) instead of discriminatory unions for handling states
- [x] use Angular Material
- [x] use Storybook for component first development and unit tests
- [x] use Jest for unit and integration tests
- [x] use Playwright for e2e and integration tests
- [x] use modular architecture with feature and views modules
- [x] use Apollo Client for GraphQL

## Backend
- [x] use NestJS
- [x] use Postgres
- [x] use SQLite for tests
- [x] use sequelize, sequelize-typescript for DTO, DAO
- [x] use umzug for migrations
- [x] use Jest for unit and integration tests
- [x] use supertest for api testing
- [x] use apollo server for graphql
