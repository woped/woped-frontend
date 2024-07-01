# WoPeD Webclient

This repository contains the WoPeD Webclient. <br>
The application has been built based on [angular-starter](https://github.com/wlucha/angular-starter)

Navigate to https://woped.github.io/woped-frontend/home to use the WoPeD Webclient.

## Docker Deployment

```bash
# Build Docker image
$ docker build . -t p2t-woped-webservice-frontend

# Run Docker Container
$ docker run -p 3000:80 p2t-woped-webservice-frontend
```
