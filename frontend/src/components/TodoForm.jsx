import React, { useState } from 'react'
import axios from 'axios'
import {Button, Form, Title,FormGroup,Label, Input,Select,Textarea, P} from "./styled.js"

const CadasForm = () => {

    const [sargento, setSargento] = React.useState("")
    const [equipe, setEquipe] = React.useState("")
    const [concluido, setConcluido] = React.useState(false)
    const [solucao, setSolucao] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [loading, setLoading] = React.useState("")
    
    const handlePost = async (event) => {

        event.preventDefault();

        setLoading("Carregando...")
        setConcluido(eval(concluido))

        const token = localStorage.getItem("authToken")
        try {

            await axios.post("http://localhost:3000/ocorrencias/criar", {
                sargento, 
                equipe,
                concluido,
                solucao            
            }, {
            headers: {
              Authorization: `Bearer ${token}`,
            }})
            setMessage("Cadastro adicionado com sucesso!")
            setSargento('')
            setEquipe('')
            setConcluido('')
            setSolucao('')
        } catch (error) {
            setMessage("Não foi possível adicionar esse cadastro!")
            console.error(error)
        }
    }

    console.log(sargento)


  return (
    <Form onSubmit={handlePost}>

    <Title>Cadastro de Atendimento</Title>

    <FormGroup>
          <Label htmlFor="sargento">Sargento / Cabo</Label>
          <Input type="text" 
            placeholder="Digite o nome do Sargento ou do Cabo" 
            value={sargento}
            onChange={(e) => setSargento(e.target.value)}
            required />
        </FormGroup>
        <br />
        <FormGroup>
          <Label htmlFor="equipe">Equipe</Label>
          <Input type="text" 
            placeholder="Digite o nome da equipe"
            value={equipe}
            onChange={(e) => setEquipe(e.target.value)}
            /> 
        </FormGroup>
        <br />
          <FormGroup> 
        <Select  value={concluido} name="concluido" id="concluido" onChange={(e) => setConcluido(e.target.value)}>
          <option onClick={(e) => setConcluido(e.target.value)}  value="true" >Sim</option>
          <option selected onClick={(e) => setConcluido(e.target.value)}  value="false">Não</option>
        </Select>
        </FormGroup>  
          <FormGroup>

          <Label htmlFor="solucao">Qual foi a solução aplicada?</Label>
          <Textarea  
            placeholder="Digite qual foi a solução aplicada"
            value={solucao}
            onChange={(e) => setSolucao(e.target.value)}
          />
        </FormGroup>
        <br />
        {message ? <P>{message}</P> : <P>{loading}</P>}
      <Button type="submit">
        ENVIAR
      </Button>
    </Form>
  
  )
}

export default CadasForm;