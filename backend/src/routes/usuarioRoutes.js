import { Router } from "express";
import { cadastro, countOcorrencia, countOcorrenciaId, getUser, login } from "../controllers/usuarioController.js";
import verifyToken from "../middlewares/verify-token.js";

const route = Router()

route.post("/cadastro", cadastro)
route.post("/login", login)
route.get("/get", getUser)
route.get("/count-ocorrencia", verifyToken, countOcorrencia)
route.get("/count-ocorrencia/:id", countOcorrenciaId)


export default route