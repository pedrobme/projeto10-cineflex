import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function SucessScreen() {
  const location = useLocation();
  const sessionData = location.state.sessionData;
  const selectedSeatsNames = location.state.selectedSeatsNames;
  const buyerName = location.state.name;
  const buyerCpf = location.state.cpf;

  return (
    <>
      <PageTitle>Pedido feito com sucesso!</PageTitle>
      <InfosContainer>
        <h2>Filme e sessão</h2>
        <p>{sessionData.movie.title}</p>
        <p>
          {sessionData.day.date} {sessionData.name}
        </p>
      </InfosContainer>
      <InfosContainer>
        <h2>Ingressos</h2>
        {selectedSeatsNames.map((seat, index) => (
          <p key={index}>Assento {seat}</p>
        ))}
      </InfosContainer>
      <InfosContainer>
        <h2>Comprador</h2>
        <p>{buyerName}</p>
        <p>{buyerCpf}</p>
      </InfosContainer>
      <ButtonContainer>
        <Link to="/">
          <button>Voltar para Home</button>
        </Link>
      </ButtonContainer>
    </>
  );
}

const PageTitle = styled.div`
  width: 100vw;
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;

  color: #247a6b;
`;

const InfosContainer = styled.div`
  margin-bottom: 20px;
  margin-left: 25px;
  h2 {
    font-weight: bold;
    font-size: 24px;
  }
  p {
    font-size: 22px;
  }
`;

const ButtonContainer = styled.div`
  width: 100vw;

  display: flex;

  a{
    width: 225px;
    height: 42px;
    margin-inline: auto;
  }

  button {
    background-color: #e8833a;

    width: 225px;
    height: 42px;

    color: white;

    font-size: 16px;

    border: none;

    margin-block: 50px;
    margin-inline: auto;
  }
`;
