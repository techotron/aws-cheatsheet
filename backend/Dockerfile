FROM node:14.15.1-stretch
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "app.js" ]
