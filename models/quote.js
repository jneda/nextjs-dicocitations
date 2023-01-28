import { DataTypes } from "sequelize";
import sequelize from "../db/db";
import Author from "./author";

const Quote = sequelize.define(
  "quote",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: Author,
        key: "id",
      },
    },
  },
  {
    tableName: "quote",
    timestamps: false,
  }
);

Quote.belongsTo(Author, { foreignKey: "authorId" });
/* 
(async () => {
  await Quote.sync();
})();
console.log("The table for the User model has been synced with.");
 */
export default Quote;
