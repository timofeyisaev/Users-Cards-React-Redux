import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import s from './style.module.css';

export default function CardsList() {

    const cards = useSelector (state => state);

  return (
    <div className={s.cards}>
      <div>
        Мужчины
      </div>
    {     
            cards   
            .filter((card) => card.gender === 1)
            .map((card) =>          
            <Card key={card.id}{...card}/>)
    }  
       
    </div>
  )
}
