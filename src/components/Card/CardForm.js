import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../../styles/card";
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
          <div className="img">
            <svg
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.333 32.5C62.333 48.794 49.0311 62.0314 32.587 62.0314C16.143 62.0314 2.841 48.794 2.841 32.5C2.841 16.206 16.143 2.96863 32.587 2.96863C49.0311 2.96863 62.333 16.206 62.333 32.5Z"
                fill="white"
                stroke="#F77C7C"
                strokeWidth="5"
              />
              <ellipse
                cx="32.587"
                cy="32.7963"
                rx="14.9145"
                ry="14.8153"
                fill="#F77C7C"
              />
              <path
                d="M22.1388 8.62745C21.2441 5.43861 23.6409 2.27682 26.9529 2.27682L38.2733 2.27682C41.5694 2.27682 43.9637 5.41026 43.0977 8.59051L40.8989 16.6652C40.3063 18.8414 38.3301 20.3515 36.0746 20.3515H29.2183C26.977 20.3515 25.0096 18.86 24.4041 16.7021L22.1388 8.62745Z"
                fill="#F77C7C"
              />
              <path
                d="M8.49531 42.8951C5.31031 43.7768 2.16132 41.3811 2.16132 38.0763L2.16132 26.8723C2.16132 23.5832 5.28235 21.1901 8.45875 22.0435L16.6545 24.2457C18.8388 24.8326 20.3571 26.8127 20.3571 29.0744L20.3571 35.8074C20.3571 38.0551 18.8573 40.0265 16.6911 40.6262L8.49531 42.8951Z"
                fill="#F77C7C"
              />
              <path
                d="M43.0352 56.3725C43.9299 59.5614 41.5331 62.7232 38.2211 62.7232L26.9007 62.7232C23.6046 62.7232 21.2103 59.5897 22.0763 56.4095L24.2751 48.3348C24.8677 46.1586 26.8439 44.6485 29.0994 44.6485L35.9557 44.6485C38.197 44.6485 40.1644 46.14 40.7698 48.2979L43.0352 56.3725Z"
                fill="#F77C7C"
              />
              <path
                d="M56.6787 22.105C59.8637 21.2232 63.0127 23.6189 63.0127 26.9237L63.0127 38.1278C63.0127 41.4168 59.8916 43.81 56.7152 42.9565L48.5195 40.7544C46.3352 40.1675 44.8169 38.1874 44.8169 35.9256L44.8169 29.1926C44.8169 26.9449 46.3167 24.9735 48.4829 24.3738L56.6787 22.105Z"
                fill="#F77C7C"
              />
              <ellipse
                cx="32.587"
                cy="32.5"
                rx="10.4019"
                ry="10.3327"
                fill="white"
              />
            </svg>
          </div>
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
      svg {
        transform: rotate(-30deg);
      }
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
