FROM node:19.6.0

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install -g serve
RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
