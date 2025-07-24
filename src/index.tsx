import { serve } from 'bun';
import index from './index.html';

const _server = serve({
  port: process.env.PORT || 3000,
  routes: {
    // Serve index.html for all routes
    '/*': index,
  },

  development: process.env.NODE_ENV !== 'production' && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

// Auto-open browser in development
if (process.env.NODE_ENV !== 'production') {
  import('node:child_process').then(({ exec }) => {
    exec('open http://localhost:3000');
  });
}
