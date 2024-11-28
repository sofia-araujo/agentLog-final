
import Ocorrencia from "../models/ocorrenciaModel.js"
import getToken from "../helpers/get-token.js"
import getUserByToken from "../helpers/get-user-by-token.js"
import {z} from "zod"

const createSchema = z.object({
    sargento: z.string({
        required_error: "O nome do Sargento/Cabo é obrigatório"
    }),
    equipe: z.string({
        required_error: "O nome da equipe é obrigatorio"
    }),
    concluido: z.boolean({
        required_error: "A informação de que foi concluido é obridatorio"
    }),
    solucao: z.string({
        required_error: "A solução aplicada é obrigatoria"
    })
})


export const getOcorrencia = async (request, response) => {
    try {
        const ocorrencia = await Ocorrencia.findAll()

        response.status(200).json(ocorrencia)
    } catch (error) {
        console.log(error)
        response.status(500).json({Err: "Erro ao buscar ocorrencias"})
    }
}

export const criarOcorrencia = async (request, response) => {


    const createValidation = createSchema.safeParse(request.body)

    if(!createValidation.success){
        response.status(400).json(createValidation.error)
        return
    }


    const {sargento} = createValidation.data
    const {equipe} = createValidation.data
    const {concluido} = createValidation.data
    const {solucao} = createValidation.data

    const novoCadastro = {
        sargento,
        equipe,
        concluido,
        solucao
    }

    try {
        const token = getToken(request);
        const usuario = await getUserByToken(token)
        
        const ocorrenciaPost = await Ocorrencia.create({
            ...novoCadastro,
            usuario_id: usuario.id
        })

        response.status(201).json({msg: "Ocorrencia criada com sucesso"})
    } catch (error) {
        console.log(error)
        response.status(500).json({Err: "Erro ao cadastrar ocorrencia"})
    }
}