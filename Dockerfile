FROM node:12.22.9

WORKDIR /app

COPY package.json .

COPY package-lock.json .

EXPOSE 4000

RUN npm install --force

COPY . .

CMD [ "npm","run","start-dev" ]

