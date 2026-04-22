const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app.js');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.set('strictQuery', true);
mongoose
  .connect(DB)
  .then((con) => {
    console.log(con.connections);
    console.log('Database connected');
  })
  .catch((err) => console.log(err));

const port = process.env.PORT || 8080;
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`),
);

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection:', err.name, err.message);
  console.log('Shutting down...');
  server.close(() => process.exit(1));
});

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception:', err.name, err.message);
  console.log('Shutting down...');
  server.close(() => process.exit(1));
});
