import { DataTypes } from "sequelize";
import sequelize from "../db/db";

const Author = sequelize.define(
  "author",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    century: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "author",
    timestamps: false,
  }
);
/* 
console.log(Author);
(async () => {
  await Author.sync();
})();
console.log("The table for the User model has been synced with.");
 */
export default Author;
