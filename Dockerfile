FROM node:20

WORKDIR /usr/src/app

WORKDIR /usr/src/app/client

COPY client/package*.json ./
RUN npm install

COPY client/ ./
RUN npm run build

WORKDIR /usr/src/app/server

COPY server/package*.json ./
RUN npm install

COPY server/ ./

EXPOSE 3004

CMD [ "node", "index.js" ]
