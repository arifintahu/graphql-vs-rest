//Import file
import * as express from 'express';
import * as bodyParser from 'body-parser'; 
import * as fs from 'fs';
import * as path from 'path';
import * as compression from 'compression';
import * as cors from 'cors';
import { createServer } from 'http';
import { Server } from 'net';
import { resolvers } from './graphql/resolvers';
import { context } from './graphql/context';

import { 
  createContentService,
  readContentService,
  updateContentService,
  deleteContentService
 } from "./services/content.service";

import { 
  createContentTagService,
  readContentTagService
} from "./services/content-tag.service";


import { 
  registration, 
  login, 
  readUserId, 
  readUsername, 
  updateUserAccount, 
  deleteUserAccount 
} from "./services/user.service";

import { authToken } from './auth/authtoken';

//Config
const { ApolloServer, gql } = require('apollo-server-express');
const PORT = process.env.PORT || 3000;

const typeDefs = gql(fs.readFileSync( path.join(__dirname, "./graphql/schema/schema.gql"), "utf8"));
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context,
  introspection: true,
  playground: true 
});

const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse form data client
app.use('*', cors());
app.use(compression());

app.set('port', PORT);

// routing
app.get("/", (req, res) => {
  res.send("Hello")
});

//User
app.post("/user/login", login);
app.post("/user/register", registration);
app.get("/user", authToken, readUsername);
app.get("/user/:userid", authToken, readUserId);
app.put("/user/:userid", authToken, updateUserAccount);
app.delete("/user/:userid", authToken, deleteUserAccount);

//Content
app.post("/content", authToken, createContentService);
app.get("/content", authToken, readContentService);
app.put("/content/:contentId", authToken, updateContentService);
app.delete("/content/:contentId", authToken, deleteContentService);

//Content
app.post("/content/tag", authToken, createContentTagService);
app.get("/content/tag", authToken, readContentTagService);

//Create Server
const http_server = createServer(app);
server.applyMiddleware({ app });

export function startServer(): Server {
  return http_server.listen(PORT, () => {
    console.log('server listen on port ', PORT);
  });
}