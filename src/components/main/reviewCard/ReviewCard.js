import React from 'react';
import * as s from './ReviewCard.module.scss';

const ReviewCard = ({ text, foto_1x, foto_2x, girlName }) => {
  return (
    <div className={s.slider}>
      <div className={s.imgWrapper}>
        <img
          srcSet={`${foto_1x} 1x, ${foto_2x} 2x`}
          src={foto_1x}
          alt="girls foto"
        />
        <p className={s.card}>{girlName || 'Ирина'}</p>
      </div>

      <div className={s.contentWrapper}>
        <p className={s.cardContent}>
          {text ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis'}
        </p>
        <p className={`${s.card} ${s.date}`}>14.10.2021</p>
      </div>
    </div>
  );
};

export default ReviewCard;