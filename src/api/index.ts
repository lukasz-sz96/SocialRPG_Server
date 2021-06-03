import fastify from 'fastify';

const server = fastify();

// Declare a route
server.get('/', async (request, reply) => {
  return { hello: 'world' };
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
