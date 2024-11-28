import Express from "express"
import cors from "cors"

import Usuario from "./models/usuarioModel.js"
import Ocorrencia from "./models/ocorrenciaModel.js"

import ocorenciaRoutes from "./routes/ocorrenciaRoutes.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"


import conn from "./config/conn.js"

const app = Express()

app.use(cors())
app.use(Express.urlencoded({extended: true}))
app.use(Express.json())

conn.sync().then().catch((error) => console.log(error))

app.use("/ocorrencias", ocorenciaRoutes)
app.use("/usuario", usuarioRoutes)

app.use((req, res) => {
    res.status(404).json({Msg: "Rota não encontrada"})
})

export default app