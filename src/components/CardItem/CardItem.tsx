import React, { Component } from 'react';
import styles from './CardItem.module.scss';

interface Props {
  id: Number;
  name: string;
  description: string;
  color: string;
  price: number;
  rating: number;
  src: string;
}

export default class CardItem extends Component<Props> {
  render() {
    const cards = this.props;
    return (
      <div className={styles.card}>
        <img className={styles.card__img} src={cards.src} alt="img" />
        <div className={styles.card__name}>{cards.name}</div>
        <div className={styles.card__desc}>{cards.description}</div>

        <div className={styles.card__color}>
          <div className={styles.color__desc}>Цвет</div>
          <div className={styles.color__mean}>{cards.color}</div>
        </div>

        <div className={styles.card__price}>
          <div className={styles.price__desc}>Цена</div>
          <div className={styles.price__mean}>{cards.price}</div>
        </div>

        <div className={styles.card__rating}>
          <div className={styles.rating__desc}>Рейтинг</div>
          <div className={styles.rating__mean}>{cards.rating}</div>
        </div>
      </div>
    );
  }
}
