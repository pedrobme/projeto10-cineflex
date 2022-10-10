import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./Form";
import Footer from "./Footer";

export default function SeatsSession() {
  const { idSessao } = useParams();
  const [sessionData, setSessionData] = useState();
  const [selectedSeats, setSelectedSeats] = useState({
    ids: [],
    seatsNames: [],
  });

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((ans) => {
      setSessionData(ans.data);
    });
  }, [idSessao]);

  function refreshSelectedSeats(selectedSeatId, selectedSeatName) {
    const isSelected = selectedSeats.ids.includes(selectedSeatId);

    if (isSelected) {
      const newSelectedSeatsObject = { ...selectedSeats };
      const indexToRemove = newSelectedSeatsObject.ids.indexOf(
        selectedSeatId.toString()
      );
      newSelectedSeatsObject.ids.splice(indexToRemove, 1);
      newSelectedSeatsObject.seatsNames.splice(indexToRemove, 1);

      setSelectedSeats(newSelectedSeatsObject);
    } else {
      const newSelectedSeatsObject = { ...selectedSeats };
      newSelectedSeatsObject.ids.push(selectedSeatId);
      newSelectedSeatsObject.seatsNames.push(selectedSeatName);
      setSelectedSeats(newSelectedSeatsObject);
    }
  }

  function seatsLayout() {
    if (sessionData) {
      const seatsLayout = sessionData.seats.map((seat, index) => (
        <Seat
          onClick={
            seat.isAvailable === false
              ? () => {
                  alert("Unavailable seat");
                }
              : (event) =>
                  refreshSelectedSeats(
                    event.target.id,
                    event.target.textContent
                  )
          }
          key={index}
          id={seat.id}
          seatData={seat}
          getSeatColor={getSeatColor}
        >
          {seat.name}
        </Seat>
      ));
      return seatsLayout;
    } else {
      return <p>Carregando...</p>;
    }
  }

  function getSeatColor(seatData) {
    if (selectedSeats.ids.includes(seatData.id.toString())) {
      return { backgroundColor: `#1AAE9E`, borderColor: `#0E7D71` };
    }

    switch (seatData.isAvailable) {
      case true:
        return { backgroundColor: `#C3CFD9`, borderColor: `#7B8B99` };

      case false:
        return { backgroundColor: `#FBE192`, borderColor: `#F7C52B` };

      default:
        return;
    }
  }

  const Layout = (
    <>
      <LinkContainer>
        <Link to={`/sessoes/${idSessao}`}>
          <BackToFilmPage>
            <ion-icon name="arrow-undo-circle"></ion-icon>
            <p>Voltar</p>
          </BackToFilmPage>
        </Link>
      </LinkContainer>
      <PageTitle>Selecione o(s) assento(s)</PageTitle>
      <SeatsList>{seatsLayout()}</SeatsList>
      <ColorsLabels>
        <LabelContainer>
          <SeatLabel type={"selected"}></SeatLabel>
          Selected
        </LabelContainer>

        <LabelContainer>
          <SeatLabel type={"available"}></SeatLabel>
          Available
        </LabelContainer>

        <LabelContainer>
          <SeatLabel type={"unavailable"}></SeatLabel>
          Unavailable
        </LabelContainer>
      </ColorsLabels>
      <Form selectedSeats={selectedSeats} sessionData={sessionData} />
      <Footer sessionData={sessionData} />
    </>
  );

  return Layout;
}

// STYLED COMPONENTS

const LinkContainer = styled.div`
  width: fit-content;
`;

const BackToFilmPage = styled.div`
  display: flex;
  align-items: center;

  ion-icon {
    font-size: 25px;
    color: green;
  }
`;

const PageTitle = styled.div`
  width: 100vw;
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
`;

const SeatsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 320px;

  padding-inline: 8px;

  margin: auto;
`;

const Seat = styled.div`
  width: 26px;
  height: 26px;

  font-size: 13px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-inline: 2px;
  margin-block: 10px;

  background-color: ${(props) =>
    props.getSeatColor(props.seatData).backgroundColor};

  border: 2px solid ${(props) => props.getSeatColor(props.seatData).borderColor};

  border-radius: 13px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const ColorsLabels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 60px;
`;

const SeatLabel = styled.div`
  width: 26px;
  height: 26px;

  font-size: 13px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-inline: 2px;
  margin-block: 10px;

  background-color: ${({ type }) =>
    type === `selected`
      ? `#1AAE9E`
      : type === "available"
      ? `#C3CFD9`
      : `#FBE192`};

  border: 1px solid
    ${({ type }) =>
      type === `selected`
        ? `#0E7D71`
        : type === "available"
        ? `#7B8B99`
        : `#F7C52B`};

  border-radius: 13px;
`;