import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Form({ selectedSeats, sessionData }) {
  const [formState, setFormState] = useState({
    selectedSeats: { seatsNames: [] },
  });

  const navigate = useNavigate();

  useEffect(() => {
    refreshFormState({ target: { value: selectedSeats } }, "selectedSeats");
  }, [selectedSeats]);

  function refreshFormState(event, inputId) {
    const newFormState = { ...formState };
    newFormState[inputId] = event.target.value;
    setFormState(newFormState);
  }

  function submitForm(event) {
    event.preventDefault();

    const objectToPost = {
      cpf: formState.cpf,
      name: formState.name,
      ids: selectedSeats.ids,
    };

    if (objectToPost.ids.length === 0) {
      alert("You must select at least one seat.");
      return;
    }

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      objectToPost
    );

    promise.then(() => {
      navigate("/sucesso", {
        state: {
          sessionData: sessionData,
          name: formState.name,
          cpf: formState.cpf,
          selectedSeatsNames: formState.selectedSeats.seatsNames,
        },
      });
    });

    promise.catch(() => alert("erro"));
  }

  return (
    <>
      <StyledForm onSubmit={(event) => submitForm(event)}>
        <InputContainer>
          <label htmlFor="name">Nome do comprador:</label>
          <input
            onChange={(event) => refreshFormState(event, "name")}
            id="name"
            placeholder="Digite seu nome"
            required
          ></input>
        </InputContainer>

        <InputContainer>
          <label htmlFor="cpf">CPF do comprador:</label>
          <input
            onChange={(event) => refreshFormState(event, "cpf")}
            id="cpf"
            placeholder="Digite seu CPF"
            required
          ></input>
        </InputContainer>

        <ButtonContainer>
          <button type="submit">Reservar assento(s)</button>
        </ButtonContainer>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 300px;
    height: 40px;

    margin-inline: auto;
    margin-block: 10px;
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

const InputContainer = styled.div`
  width: 300px;
  margin-inline: auto;
`;

const ButtonContainer = styled.div`
  width: 100vw;

  display: flex;
`;
