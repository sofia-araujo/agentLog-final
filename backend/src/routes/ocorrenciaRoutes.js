import { Router } from "express";
import { criarOcorrencia, getOcorrencia } from "../controllers/ocorrenciasController.js";
import verifyToken from "../middlewares/verify-token.js";

const route = Router()

route.get("/", verifyToken, getOcorrencia)
route.post("/criar", verifyToken, criarOcorrencia)

export default route