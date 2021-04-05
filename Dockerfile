FROM node:14

RUN mkdir /code

WORKDIR /code

COPY package.json yarn.lock .pnp.* ./
RUN yarn set version 2 && yarn install

COPY ./src ./src

EXPOSE 8080

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && yarn start