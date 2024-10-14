# Lyrics app backend

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## .env

```bash
#App
NODE_ENV="..."
PORT="..."
FRONTEND_URL="..."

#JWT
JWT_SECRET="..."
JWT_ACCESS_TOKEN_EXPIRED_IN="1d" // days
REFRESH_JWT_SECRET="..."
REFRESH_JWT_ACCESS_TOKEN_EXPIRED_IN="30d" // days

#Google
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GOOGLE_CALLBACK_URL="..."

# Database
DATABASE_URL="postgresql://postgres:..."
```
