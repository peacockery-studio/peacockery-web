import { serve } from 'bun';
import index from './index.html';

const server = serve({
  port: process.env.PORT || 3000,
  routes: {
    // Serve index.html for all unmatched routes.
    '/*': index,

    '/api/hello': {
      GET(_req) {
        return Response.json({
          message: 'Hello, world!',
          method: 'GET',
        });
      },
      PUT(_req) {
        return Response.json({
          message: 'Hello, world!',
          method: 'PUT',
        });
      },
    },

    '/api/hello/:name': (req) => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== 'production' && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`Server running at ${server.url}`);

// Auto-open browser in development
if (process.env.NODE_ENV !== 'production') {
  import('child_process').then(({ exec }) => {
    exec('open http://localhost:3000');
  });
}
