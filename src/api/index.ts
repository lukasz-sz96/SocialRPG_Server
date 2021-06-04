import fastify, { FastifyRequest } from 'fastify';
import db from '../database/handler';

interface test extends FastifyRequest {
  query: {
    name: string;
  };
}

const server = fastify();

interface test {
  query: {
    name: string;
  };
}

// Declare a route
server.get('/player:name', async (request: any, reply) => {
  return await db.findByName(request.query.name);
});

// Run the server!
const startapi = async () => {
  try {
    await server.listen(5000);
    console.log('fastify server running on port 5000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

export default startapi;
