import React from 'react'
import { Container } from "react-bootstrap";
import CadasForm from "../components/TodoForm.jsx"
import "./cadastro.css"


const Cadastro = () => {

  return (
    <>
      <Container>
        <CadasForm />
      </Container>
    </>
  )
}

export default Cadastro;