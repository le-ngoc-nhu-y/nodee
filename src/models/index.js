import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import UserModel from './user.js'; // Make sure you have a user.js model file

dotenv.config(); // Load environment variables

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD || null,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

// Initialize models
const db = {
  sequelize,
  Sequelize,
  User: UserModel(sequelize, Sequelize), // Import User model
};

// Sync database
db.sequelize.sync({ alter: true }) // Ensure tables exist
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

export default db;
