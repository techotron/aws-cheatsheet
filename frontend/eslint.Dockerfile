FROM node:14.7.0-stretch as build-env
WORKDIR /data
ENV PATH /data/node_modules/.bin:$PATH
COPY package.json package-lock.json ./

RUN npm install --production=false
ENTRYPOINT ["eslint"]
CMD ["--help"]
