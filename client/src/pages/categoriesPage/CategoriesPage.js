import React from 'react';
import "./categories-page.css";
import { Link, useHistory } from "react-router-dom";

function CategoriesPage() {
  return <div className='categories-page_container'>
      {/* <h1>Pick Category</h1> */}
      <div className='categories_container'>
     <Link to="/chooseButton-page"><div><div className='categories-cards btn-title'>Buttons</div></div></Link>
     <Link><div><div className='categories-cards .btn-title'>Cards</div></div></Link>
     <Link><div><div className='categories-cards .btn-title'>Reviews</div></div></Link>
     <Link><div><div className='categories-cards .btn-title'>Inputs</div></div></Link>
      </div>
  </div>;
}

export default CategoriesPage;
