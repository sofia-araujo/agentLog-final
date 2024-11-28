import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { TextH1I, Container } from "../Styles/TabelaAtend.js"
import axios from 'axios';

const TabelaAtend = () => {
  const [ocorrencias, setOcorrencias] = React.useState([])

  const fetchOcorrenciaData = async () => {

    const token = localStorage.getItem("authToken")

      try {
        const response =  await axios.get("http://localhost:3000/ocorrencias", {
          headers: {
            Authorization: `Bearer ${token}`,
          }})
        setOcorrencias(response.data)
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
    const getAll = async () => {
      await fetchOcorrenciaData()
    }

    getAll()
  }, [])

  console.log(ocorrencias)

  return (
    <Container>
    <TextH1I>Tabela de<br/>Ocorrencias</TextH1I>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sargento / Cabo</th>
          <th>Equipe</th>
          <th>Concluído</th>
          <th>Solução Aplicada</th>
        </tr>
      </thead>
      <tbody>
        {ocorrencias.map((ocorrencia) => (
          <tr key={ocorrencia.id}>
              <td>{ocorrencia.sargento}</td>
              <td>{ocorrencia.equipe}</td>
              <td>{ocorrencia.concluido ? "Sim" : "Não"}</td>
              <td>{ocorrencia.solucao}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
    </Table>
    </Container>
  );
}

export default TabelaAtend