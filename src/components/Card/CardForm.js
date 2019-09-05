import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Stars from "../Stars/Stars";

function CardForm({ form }) {
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [limit] = useState(280);
  const [inputLength, setInputLength] = useState(input.length);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Rating: ", rating, "Input: ", input);
    // to-do...
  }

  // update length when input changes
  useEffect(() => {
    setInputLength(input.length);
  }, [input]);

  return (
    <Card form={form}>
      <StyledCardForm onSubmit={handleSubmit}>
        <div className="main">
          <div className="img" />
          <textarea
            name="tweet"
            id="tweet"
            className="tweet"
            placeholder="Type draft..."
            value={input}
            onChange={e => setInput(e.target.value)}
          ></textarea>
          <CharCounter
            warning={inputLength > limit - 21 && inputLength < limit}
            over={inputLength >= limit}
          >
            {inputLength}/{limit}
          </CharCounter>
        </div>
        <footer className="footer">
          <div className="ranking">
            <Stars setRating={setRating} />
          </div>
          <Button>Save</Button>
        </footer>
      </StyledCardForm>
    </Card>
  );
}

const StyledCardForm = styled.form`
  display: flex;
  flex-direction: column;
  .main {
    display: grid;
    grid-template-columns: 65px auto;
    grid-column-gap: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #eee;
    .img {
      height: 65px;
      width: 65px;
      border-radius: 50%;
      background: #eee;
      margin-right: 1rem;
    }
    .tweet {
      width: 100%;
      font-size: inherit;
      font-family: inherit;
      border: none;
      outline: none;
      /* overflow: ; */
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const CharCounter = styled.div`
  font-size: 1.3rem;
  grid-column: span 2;
  justify-self: end;
  color: ${({ warning, over }) =>
    warning ? "#FFAD1E" : over ? "red" : "black"};
`;

const Button = styled.button`
  background: #4e7e9d;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: inherit;
  font-family: inherit;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #5d91b3;
  }
`;

export default CardForm;
