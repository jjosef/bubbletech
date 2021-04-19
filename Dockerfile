FROM node:14

WORKDIR /code

COPY package.json yarn.lock ./
RUN yarn install

COPY ./src ./src
COPY ./google-credentials.json ./

EXPOSE 8080

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && yarn dev