# database

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build database` to build the library.

## Running unit tests

Run `nx test database` to execute the unit tests via [Jest](https://jestjs.io).

## Running migrations on whole project:
From `scripts` folder
Run `ts-node migrate-up.ts` to execute all migrations defined in all modules
Run `ts-node migrate-down.ts` to reverse migrations

## Running seed on whole project:
From `scripts` folder
Run `ts-node seed-up.ts` to execute all seeds defined in all modules
Run `ts-node seed-down.ts` to reverse seeds
