FROM node:20-alpine

WORKDIR /app

RUN corepack enable

COPY package.json ./
RUN yarn install

COPY . .

EXPOSE 8001

CMD ["yarn", "start"]
