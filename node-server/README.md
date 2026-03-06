# Node Server

Simple Express server scaffold with no endpoints.

## Run locally

```bash
cd node-server
yarn install
yarn start
```

The server listens on port `8001`.

## Run with Docker

```bash
cd node-server
docker build -t node-server .
docker run --rm -p 8001:8001 node-server
```
