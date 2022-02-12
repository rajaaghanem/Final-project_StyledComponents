import React from "react";
import { Link } from "react-router-dom";
import "./chooseCardPage.css";

function ChooseCardPage() {
  return (
    <div className="component-style_cards_container">
      <Link to="/normalCard-page" className="component-blue_card">
        <div></div>
      </Link>
      <Link to="/" className="component-round_card">
        <div></div>
      </Link>
    </div>
  );
}

export default ChooseCardPage;
