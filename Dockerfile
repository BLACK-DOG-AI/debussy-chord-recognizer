FROM node:18.10.0

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli@16.2.x

RUN npm install

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]