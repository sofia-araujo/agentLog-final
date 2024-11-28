import {Sequelize} from "sequelize"

const conn = new Sequelize('agentLog', 'root', 'SofiaDev!22#', {
    host: 'localhost',
    dialect: 'mysql'
})

export default conn