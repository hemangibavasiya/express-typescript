import express from 'express';

const app: express.Express = express();

app.listen(3000, () => {
  console.log(`[server]: Server is running at http://localhost:${3000}`);
});
