import React from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.css';

export default function AddCard({addCard}) {

    const dispatch = useDispatch();

    const submit = event => {
        event.preventDefault();
        const {name, picture, gender} = event.target;
        dispatch({type: 'CARD_ADD', payload:{
            id: Date.now(),
            name: name.value,
            picture: picture.value,
            gender: +gender.value
        }});
        console.log (name.value, gender.value, picture.value);
        name.value = '';
        picture.value = '';
        gender.value = '';
    };


    const genderTypes = [
        {id: 1, title: 'Мужчина', value: 1},
        {id: 2, title: 'Женщина', value: 2}
    ];

    

  return (
    <div>

        <form onSubmit={submit} className={s.form}>
            
            <input type="text" placeholder='Имя' name='name'/>
            <input type="url" placeholder='Ссылка на аватарку' name="picture" />
            <select name="gender">
                {
                    genderTypes.map(({id, title, value}) => <option key={id} value={value}>{title}</option>)
                }
            </select>
            <button>Добавить</button>
            
            
        </form>

    </div>
  )
};
