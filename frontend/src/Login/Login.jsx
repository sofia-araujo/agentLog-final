
import LOGO from "/LOG-removebg-preview.png"
import React from 'react';
import { useAuth } from "../Auth/AuthContext";
import { useNavigate } from 'react-router-dom';
import "../Styles/Login.css"
import {
  LoginBox,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  Container,
  LeftSection,
  Logo,
  LogoImage,
  Text,
  Subtitulo
} from '../Styles/Login.js';

const Login = () => {
  

  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  
  const { loginPost } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async () => {
    await loginPost(email, senha)
    setEmail("")
    setSenha("")
    navigate("/")
  };

  return (
    <Container>
      <LeftSection>
      <Text>Welcome to website</Text>
        <Subtitulo>Com cada ocorrência organizada,</Subtitulo>
        <Subtitulo>você transforma o caos em proteção</Subtitulo>
      </LeftSection>
      <LoginBox>
        <Title>Login</Title>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <InputGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Senha:</Label>
          <Input

            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit" onClick={handleLogin}>ENTRAR</Button>
      </LoginBox>
    </Container>
  );
}

export default Login;