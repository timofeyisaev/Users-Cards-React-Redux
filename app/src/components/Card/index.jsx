import React from 'react';
import s from './style.module.css';

export default function Card({id, name, picture, gender }) {
  return (
    <div className={s.card}>
      <div> <img src={picture} /> </div>
      <div>{name}</div>        
    </div>
  )
}
