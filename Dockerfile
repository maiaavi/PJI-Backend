FROM node:latest

RUN apt-get update && apt-get install -y default-mysql-client

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY wait-for-db.sh ./

RUN chmod +x wait-for-db.sh

EXPOSE 5000

CMD ["sh", "-c", "./wait-for-db.sh npm run migrate && npm run dev"]
