import React from 'react';
import "./chooseButtonPage.css";
import { Link} from "react-router-dom";

function ChooseButtonPage() {
  return <div className='component-style_cards_container'>
     <Link to="/greenButton-page" className='component-blue_btn'><div></div></Link> 
     <Link to="/roundButton-page" className='component-round_btn'><div></div></Link> 
  </div>;
}

export default ChooseButtonPage;
