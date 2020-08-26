import React, { useState } from 'react';
import '../NavBar.css'

export default function HeaderComponent(props) {

    return (
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="/#">Разминка</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">Воробьиные</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">Лесные птицы</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">Певчие птицы</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">Хищные птицы</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">Морские птицы</a>
          </li>
        </ul>);
}
