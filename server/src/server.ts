import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors)
app.register(appRoutes)

/**
 * Método HTTP: Get, Post, Put, Patch, Delete
 */

app.listen({
  port: 3333
}).then(() => {
  console.log('Listen on port: 3333');

})