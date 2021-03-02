import React from 'react';
import './styles/Add.css';
import ButtonImg from './../images/add.png'
import { Link } from 'react-router-dom';

const Add = () => (
  <Link to="/exercise/new">
    <img src={ButtonImg} className="add" />
  </Link>
)

export default Add