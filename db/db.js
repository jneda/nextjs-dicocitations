import { Sequelize } from "sequelize";

const sequelize = new Sequelize("dictionary", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// sync to database
/* (async () => {
  await sequelize.sync({ alter: true });
})(); */

export default sequelize;
