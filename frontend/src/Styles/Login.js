
import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 50px;
  color: white;
  font-family: sans-serif;
  background-color: #343BBF;
`;

export const LeftSection = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const LogoImage = styled.img`
margin-top:-80px;
  width: 300px;
  height: 300px;
  margin-right: 10px;
  top: 0;
  position: absolute;
  left: 10px;
`;

export const LoginBox = styled.div`
  background-color:rgba(165, 165, 165, 1);
  padding: 70px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 100px;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  padding-bottom: 30px;
  font-size: 24px;
  color: #23288C;
  font-family:  sans-serif;
  font-size: 30px;
  text-align: center;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  width: 280px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
  color: #23288C;
  font-family: sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #23288C;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  margin-left: 77px;
  cursor: pointer;

  &:hover {
    background-color: #3333ff;
  }
`;

export const ErrorMessage = styled.div`
  color: #484d50;
  margin-bottom: 20px;
  font-family: 'Poppins' sans-serif;
`;

export const Text = styled.h1`
  margin-bottom: 20px;
  font-family:  sans-serif;
  font-size: 60px;
  margin-bottom: 10px;
`;

export const Subtitulo = styled.p`
font-size: 30px;
font-family:  sans-serif;
font-weight: bold;
line-height: 0;
padding-top: 4px;

`;

