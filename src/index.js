import createApp from './app.js';
import connect from './database/connection.js';

(() => {
  const port = 3000;
  const app = createApp();
  app.listen(port, async () => {
    await connect();
    console.log('Database is connected! listening to localhost', port);
  });
})();
