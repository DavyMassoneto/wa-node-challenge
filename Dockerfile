FROM node:14-alpine

WORKDIR /backend

ENV PATH /backend/node_modules/.bin:$PATH

COPY package.json /backend/package.json
RUN yarn install --silent

CMD ["yarn", "start:dev"]