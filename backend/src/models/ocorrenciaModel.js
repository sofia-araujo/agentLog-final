import { DataTypes } from "sequelize";
import conn from "../config/conn.js";
import Usuario from "./usuarioModel.js";

const Ocorrencia = conn.define("ocorrencias", {
    sargento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    equipe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    concluido: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    solucao: {
        type: DataTypes.TEXT,
        allowNull: false,    
        validate: {
            min: 3
        }        
    }
})



Usuario.hasMany(Ocorrencia, {
    foreignKey: "usuario_id"
})

Ocorrencia.belongsTo(Usuario,  {
    foreignKey: "usuario_id"
})

export default Ocorrencia