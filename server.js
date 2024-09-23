const express = require('express');
const connectDB = require('./config/db');
const ticketRoutes = require('./routes/ticketRoutes');
const errorHandler = require('./utils/errorHandler');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api', ticketRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
