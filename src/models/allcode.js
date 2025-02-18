import { Sequelize, DataTypes, Model } from 'sequelize';

// Cấu hình database
const config = {
  username: 'root',
  password: null,
  database: 'nhuy',
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: console.log, // Đổi thành `false` nếu không muốn log query
};

// Khởi tạo Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: config.logging,
});

// Định nghĩa model AllCode
class AllCode extends Model {}

AllCode.init(
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'AllCode',
    tableName: 'AllCodes',
    timestamps: true,
  }
);

// Kiểm tra kết nối database
sequelize
  .authenticate()
  .then(() => console.log('✅ Database connected successfully!'))
  .catch((error) => console.error('❌ Database connection failed:', error));

// Đồng bộ model với database
sequelize
  .sync({ alter: true })
  .then(() => console.log('✅ AllCode table synced!'))
  .catch((err) => console.error('❌ Sync error:', err));

// ✅ Export đúng cách
export { sequelize, AllCode };
