import React from 'react';
import "./categories-page.css";
import { Link, useHistory } from "react-router-dom";

function CategoriesPage() {
  return <div className='categories-page_container'>
      <h1>Pick Category</h1>
      <div className='categories_container'>
     <Link><div><div className='categories-cards'>Buttons</div></div></Link>
     <Link><div><div className='categories-cards'>Cards</div></div></Link>
     <Link><div><div className='categories-cards'>Reviews</div></div></Link>
     <Link><div><div className='categories-cards'>Inputs</div></div></Link>
      </div>
  </div>;
}

export default CategoriesPage;
