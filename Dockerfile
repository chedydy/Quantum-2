FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY build /usr/src/app/
RUN npm install -g serve
RUN ls
CMD [ "serve", "-s", "." ]