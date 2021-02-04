FROM node:13-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4000

RUN npm run build:ssr

CMD node dist/ssr-test/server/main.js