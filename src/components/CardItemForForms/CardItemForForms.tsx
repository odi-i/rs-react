import React, { Component } from 'react';
import styles from './CardItemForForms.module.scss';

interface Props {
  name: string;
  description: string;
  color: string;
  date: string;
  gender: string;
  src: string;
}

export default class CardItemForForms extends Component<Props> {
  render() {
    const cards = this.props;
    return (
      <div className={styles.card}>
        <img className={styles.card__img} src={cards.src} alt="img" />
        <div className={styles.card__name}>{cards.name}</div>
        <div className={styles.card__desc}>{cards.description}</div>

        <div className={styles.card__color}>
          <div className={styles.color__desc}>Color</div>
          <div className={styles.color__mean}>{cards.color}</div>
        </div>

        <div className={styles.card__price}>
          <div className={styles.price__desc}>Date</div>
          <div className={styles.price__mean}>{cards.date}</div>
        </div>

        <div className={styles.card__rating}>
          <div className={styles.rating__desc}>Gender</div>
          <div className={styles.rating__mean}>{cards.gender}</div>
        </div>
      </div>
    );
  }
}
