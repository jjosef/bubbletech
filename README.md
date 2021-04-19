# Bubbletech API

This is a simple express app that will provide api functionality for interacting with Bubbletech frontends and mobile applications.

For local development use docker-compose to spin up the server and do your development. You'll need to first create a `google-credentials.json` file which is just a JSON export of a google IAM service account. Then:

```
docker-compose up
```

If you don't want to use docker you can run the server locally but you'll need to provide a mongo database and then start the server with:

```
yarn dev
```

