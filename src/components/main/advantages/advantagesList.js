import React from 'react';
import * as s from './advantagesList.module.scss';

const AdvantagesList = ({ list }) => {
  return (
    <ul className={`${s.list} list`}>
      {list.map((item, index) => (
        <li key={index} className={s.item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default AdvantagesList;
