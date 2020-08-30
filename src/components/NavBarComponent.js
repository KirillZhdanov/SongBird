import React from 'react';
import '../NavBar.css'

export default function NavBarComponent({RoundCounter,}) {
  const arr = ['Разминка','Воробьиные','Лесные птицы','Певчие птицы','Хищные птицы','Морские птицы'];
  let navList = arr.map((arr,idx) => (idx===RoundCounter)? <li className="page-item active"key={idx}>  <a className="page-link" href="/#">{arr}</a></li>:<li className="page-item" key={idx}>  <a className="page-link" href="/#">{arr}</a></li>
  );
return (<div>
            <ul className="pagination">{navList}</ul>
          </div>);
}
