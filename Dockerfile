FROM node:22.16.0-alpine

RUN apk add --no-cache openssl sqlite bash

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN npx prisma generate
RUN yarn build

EXPOSE 3000

RUN cat << 'EOF' > /entrypoint.sh
#!/bin/sh
set -e

if [ "$RESET_DB" = "true" ]; then
echo "RESET_DB=true → running reset database"
npx prisma migrate reset --force
fi

npx prisma migrate deploy

if [ "$SEED" = "true" ]; then
echo "SEED=true → running seed-songs"
yarn seed-songs
else
echo "SEED is not enabled → skipping seed"
fi

exec "$@"
EOF

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["yarn", "start"]
