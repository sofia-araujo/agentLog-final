// agente realiza -> ocorrencia
// Cadastro de 

import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Usuario = conn.define("usuarios", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
         allowNull: false       
    }
})

export default Usuario