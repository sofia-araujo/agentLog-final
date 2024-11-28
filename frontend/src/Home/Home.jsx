import React from 'react';
import { FaFileAlt, FaChartBar, FaUserAlt, FaHeadset } from 'react-icons/fa';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { Button, LeftImage, MainSection, MainSectionB, RightText, ServicesSection, ServiceBlock, ServiceTitle, ServiceDescription, ContactSection, ContactBlock } from '../Styles/Main';
import Img  from "/osZomi.png"
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <MainSectionB>
      <MainSection>
        <LeftImage>
          <img src={Img} alt="Imagem Logo" />
        </LeftImage>
        <RightText>
          <h2>Seja bem-vindo(a) ao Agent Log<br />sua central de atendimentos!</h2>
          <Link className='link' to="/tabela-ocorrencias">
            <Button>
              Atendimentos
              <BsArrowUpRightCircle size={25} />
            </Button>
          </Link>
        </RightText>
      </MainSection>

      <ServicesSection>
        <h1>Nossos Serviços</h1>
        <div className="service-blocks">
          <ServiceBlock>
            <ServiceTitle>
              Tabela de atendimentos
              <FaFileAlt size={25} />
            </ServiceTitle>
            <ServiceDescription>
            Possuimos uma tabela detalhada com todas as ocorrências feitas pelos agentes.
            </ServiceDescription>
          </ServiceBlock>
          <ServiceBlock>
            <ServiceTitle>
              Gráfico de atendimentos
              <FaChartBar size={25} />
            </ServiceTitle>
            <ServiceDescription>
              Acompanhe a performance e os indicadores dos atendimentos por meio de gráficos interativos.
            </ServiceDescription>
          </ServiceBlock>
          <ServiceBlock>
            <ServiceTitle>
              Cadastro de atendimentos
              <FaUserAlt size={25} />
            </ServiceTitle>
            <ServiceDescription>
              Cadastre novos atendimentos de forma simples e eficiente, com todos os dados necessários.
            </ServiceDescription>
          </ServiceBlock>
        </div>
      </ServicesSection>

      <ContactSection>
        <ContactBlock>
          <FaHeadset size={50} />
          <p>Entre em contato conosco através do email: <strong>agentlog@gmail.com</strong></p>
        </ContactBlock>
      </ContactSection>

    </MainSectionB>
  );
};

export default Home;
