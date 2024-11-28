import Usuario from "../models/usuarioModel.js";
import Ocorrencia from "../models/ocorrenciaModel.js";

import createUserToken from "../helpers/create-user-token.js";
import getToken from "../helpers/get-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";
import { request, response } from "express";
import { literal } from "sequelize";
import { fn } from "sequelize";
import Sequelize from "sequelize";


export const cadastro = async (request, response) => {
    const { nome, email, senha } = request.body;

      try {
        await Usuario.create({ nome, email, senha});
        response.status(201).json({ msg: "Create" });
      } catch (error) {
        response.status(500).json({ err: "err" });
      }
}


export const login = async (request, response) => {
    const { email, senha } = request.body;


    try {
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) {
        response.status(400).json({ err: "Usuário não encontrado" });
        return;
      }
  
      const verificaSenha = await Usuario.findByPk(usuario.id);
      if (verificaSenha.senha !== senha) {
        response.status(400).json({ err: "Senha não confere" });
        return;
      }
    
      createUserToken(usuario, request, response);
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: "Erro ao fazer login" });
    }
}


export const getUser = async (request, response) => {
    try {
        const token = getToken(request);
        const usuario = await getUserByToken(token);
        const usuarioId = usuario.id;

        response.status(200).json(usuario);
    } catch (error) {
        console.log(error)
        response.status(500).json({Err: "Erro ao buscar usuario"})
    }
}

export const countOcorrencia = async (request, response) => {
    try {
        const totalOcorrenciasAgente = await Ocorrencia.findAll({
          attributes: [
            'usuario_id', // Agregar pelo usuario_id
            [Sequelize.fn('COUNT', Sequelize.col('usuario_id')), 'total_ocorrencias'], // Contar as ocorrências
          ],
          include: [
            {
              model: Usuario,
              attributes: ['nome'], // Incluir o nome do usuário
              required: true, // Garantir que apenas os usuários com ocorrências sejam incluídos
            },
          ],
          group: ['usuario_id', 'Usuario.id'], // Agrupar por usuario_id e Usuario.id
          order: [[Sequelize.literal('total_ocorrencias'), 'DESC']], // Ordenar pela contagem
        })

        response.status(200).json(totalOcorrenciasAgente)
    } catch (error) {
        console.log(error)
        response.status(500).json({Err: "Erro ao buscar total de ocorrencias do usuario"})
    }
}

export const countOcorrenciaId = async (request, response) => {

    const {id} = request.params

    try {
        const totalOcorrencias = await Ocorrencia.count({where: { usuario_id: id}})

        response.status(200).json({TotalOcorrencias: totalOcorrencias})
    } catch (error) {
        console.log(error)
        response.status(500).json({Err: "Erro ao buscar total de ocorrencias do usuario"})
    }
}