import React from 'react';
import "./chooseButtonPage.css";
import { Link} from "react-router-dom";

function ChooseButtonPage() {
  return <div className='component-style_cards_container'>
     <Link to="/greenButton-page" className='component-blue_btn'><div></div></Link> 
     <Link to="/roundButton-page" className='component-round_btn'><div></div></Link>
     <Link to="/offsetButton-page" className='component-offset_btn'><div></div></Link> 
     <Link to="/doubleButton-page" className='component-double_btn'><div></div></Link>
     <Link to="/grooveButton-page" className='component-groove_btn'><div></div></Link>
  </div>;
}

export default ChooseButtonPage;
