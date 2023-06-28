import createApp from './app.js';

const port = 3000;
const app = createApp();
app.listen(port, () => console.log('listening on port', port));
