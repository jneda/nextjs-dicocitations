import { Sequelize } from "sequelize";

const sequelize = new Sequelize("dictionary", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
