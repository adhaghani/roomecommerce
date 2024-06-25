import React, { useState } from "react";

const FrequentlyAsked = (props) => {
  const [Show, setShow] = useState(false);

  return (
    <div className="FrequentlyAsked" id="FrequentlyAsked">
      <div className="question-container">
        <div className="question">
          <h3>{props.question}</h3>
        </div>
        <button className={Show ? "active" : ""} onClick={() => setShow(!Show)}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      {Show && (
        <div className="answer-container">
          <p>{props.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FrequentlyAsked;
