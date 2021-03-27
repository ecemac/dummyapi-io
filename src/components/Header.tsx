import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import './Header.scss';

export const Header:React.FC = () => {
  return(
    <header>
      <Link to="/" className="logo">
        <img src="https://dummyapi.io/images/icon.png" alt="logo"/>
        <p>DUMMYAPI.IO</p>
      </Link>
      <div className="account">
        <p>
          Ece Maç
        </p>
        <Avatar alt="Ece Maç" src="https://avatars.githubusercontent.com/u/43401712?v=4" />
      </div>
    </header>
  )
}