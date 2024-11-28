import styled from 'styled-components';

export const MainSectionB = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  margin: 5rem;
  border-radius: 20px;
  background-color: #2844CCE5;
`;

export const LeftImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const RightText = styled.div`
  flex: 1;
  padding-left: 40px;
  h2 {
    color: white;
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: #23288C;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s;
  margin-left: 350px;
  margin-top: 80px;

  &:hover {
    background-color: #1e2570;
  }

  svg {
    margin-left: 15px;
    border-radius: 50%;
    padding: 2px;
  }
`;

export const ServicesSection = styled.section`
  padding: 50px;
  h1 {
    color: #23288C;
    font-size: 40px;
    text-align: center;
    margin-bottom: 100px;
  }

  .service-blocks {
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    margin-top: 20px;
    margin-bottom: 70px;
  }
`;

export const ServiceBlock = styled.div`
  background-color: #23288C;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 20%;
  min-height: 250px;
  text-align: center;
`;

export const ServiceTitle = styled.h3`
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ServiceDescription = styled.p`
  font-size: 16px;
  color: white;
  line-height: 1.6;
`;

export const ContactSection = styled.section`
  padding: 40px 0;
  display: flex;
  justify-content: center;
`;

export const ContactBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D9D9D9;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  color: black;
  gap: 15px;

  p {
    font-size: 18px;
    font-weight: 500;
  }

  svg {
    margin-right: 20px;
    color: #23288C;
  }
`;