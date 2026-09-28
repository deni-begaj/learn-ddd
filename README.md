# learn-ddd

This repository contains different examples of the main building blocks of Domain Model:

- Value Objects
- Entities
- Aggregates
- Domain Events
- Interaction between them

Examples in this repo are mainly provided in TS but they are minimal and do not required advanced NodeJS/TS skills

## Requirements

Node.js 20 or newer:

```bash
node -v
```

## Get started

```bash
npm install
npm start
```

## Folders

- `ddd-ts-example/` — runnable TypeScript example. `index.ts` is the entry point.
- `ddd-ts-example/domain/` — domain model: value objects (`MessageText`), entities (`Message`, `Attachment`), and the `Ticket` aggregate.
