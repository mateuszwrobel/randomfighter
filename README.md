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
4. Run `pnpm nx run-many -t serve -p api frontend` in the root directory
5. Open `http://localhost:4200` in your browser
6. Have fun!


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
  
