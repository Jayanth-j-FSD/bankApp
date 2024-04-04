import React from "react";
import { useState } from "react";
import "../App.css";

function Cards({ onCardClick }) {
  const handleCardClick = (cardName) => {
    if (onCardClick) {
      onCardClick(cardName);
    }
  };

  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick2 = (cardNumber) => {
    setActiveCard(cardNumber);
  };

  const isCardActive = (cardNumber) => activeCard === cardNumber;

  return (
    <div className="card p-4">
      <div
        className={`card1 m-2 border-rounded p-4 ${
          isCardActive(1) ? "active" : ""
        }`}
        onClick={() => (handleCardClick("All"), handleCardClick2(1))}
      >
        <div className="d-flex items-center p-3">
          <i className="fa-regular fa-folder-closed"></i>
          <p className="card-title ">All Accounts</p>
        </div>
      </div>

      <div
        className={`card2 m-2 border-rounded p-4 ${
          isCardActive(2) ? "active" : ""
        }`}
        onClick={() => (handleCardClick("Cash"), handleCardClick2(2))}
      >
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-building-columns"></i>
          <p className="card-title mt-2">Cash Accounts</p>
        </div>
        <p>0.00 INR</p>
      </div>

      <div
        className={`card3 m-2 border-rounded p-4 ${
          isCardActive(3) ? "active" : ""
        }`}
        onClick={() => (handleCardClick("Bank"), handleCardClick2(3))}
      >
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-dollar-sign"></i>
          <p className="card-title mt-2">Bank Loan</p>
        </div>
        <p>0.00 INR</p>
      </div>

      <div
        className={`card4 m-2 border-rounded p-4  ${
          isCardActive(4) ? "active" : ""
        }`}
        onClick={() => (handleCardClick("Invest"), handleCardClick2(4))}
      >
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-arrow-trend-up"></i>
          <p className="card-title mt-2">Investment</p>
        </div>
        <p>0.00 INR</p>
      </div>
    </div>
  );
}

export default Cards;
