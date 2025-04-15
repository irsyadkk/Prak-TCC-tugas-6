import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Note = db.define('notes',{
    title: DataTypes.STRING,
    content: DataTypes.STRING
},{
    freezeTableName:true
});

export default Note;

(async() =>{
    await db.sync();
})();