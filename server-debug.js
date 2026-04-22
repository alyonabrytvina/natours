const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app.js');

console.log('Starting server...');
console.log('Environment:', process.env.NODE_ENV);
console.log('Port:', process.env.PORT);

// Временно отключаем MongoDB для тестирования
/*
const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.set('strictQuery', true);
mongoose
  .connect(DB)
  .then((con) => {
    console.log('Database connected');
  })
  .catch((err) => console.log('MongoDB Error:', err));
*/

const port = process.env.PORT || 8080;

try {
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Visit: http://localhost:${port}`);
  });

  server.on('error', (err) => {
    console.error('Server error:', err);
  });
} catch (err) {
  console.error('Failed to start server:', err);
}
