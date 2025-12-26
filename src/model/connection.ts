import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: process.env.DB_NAME,

  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  models: [],
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully ");
  })
  .catch((error) => {
    console.log(`Authentication failed ${error}`);
  });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Data migrated successfully");
  })
  .catch((error) => {
    console.log("Unable to migarte data ");
  });

export default sequelize;
