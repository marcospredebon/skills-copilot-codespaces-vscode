// Create web server
const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//### Step 2: Create Dockerfile

//Create a file named `Dockerfile` in the project root with the following contents:

//dockerfile
//FROM node:14

//# Create app directory
//WORKDIR /usr/src/app

//# Install app dependencies
//COPY package*.json ./
//RUN npm install

//# Copy app source code
//COPY . .

//#Expose port and start application
//EXPOSE 3000
//CMD [ "node", "app.js" ]

//### Step 3: Create devcontainer.json

//Create a file named `devcontainer.json` in the project root with the following contents:

//```json
//{
//  "name": "Node.js Sample",
//  "dockerFile": "Dockerfile",
//  "appPort": [3000],
//  "extensions": ["dbaeumer.vscode-eslint"],
//  "settings": {
//    "terminal.integrated.shell.linux": "/bin/bash"
//  }
//}


//### Step 4: Create docker-compose.yml

//Create a file named `docker-compose.yml` in the project root with the following contents:
//yml
//version: "3"
//services:
//  app:
//    build: .
//    ports:
//      - "3000:3000"
//    volumes:
//      - .:/usr/src/app
//

//### Step 5: Start Docker

//Start Docker Desktop.

//### Step 6: Open in Container

//Open the project in Visual Studio Code.

//![Open in Container](
