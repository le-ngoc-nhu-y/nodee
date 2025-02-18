import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import config from './config/config.json';

dotenv.config();

// Get environment ('development', 'test', 'production')
const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = config[env];

// Set up Sequelize instance
const sequelize = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  {
    host: sequelizeConfig.host,
    dialect: sequelizeConfig.dialect,
    logging: sequelizeConfig.logging,
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => console.log('✅ Database connected successfully!'))
  .catch((err) => console.error('❌ Unable to connect:', err));

export default sequelize;
