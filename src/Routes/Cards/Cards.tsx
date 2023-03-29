import SearchBar from '../../components/SearchBar/SearchBar';
import React, { Component } from 'react';
import CardItem from '../../components/CardItem/CardItem';
import styles from './Cards.module.scss';

interface Props {
  id: number;
  name: string;
  description: string;
  color: string;
  price: number;
  rating: number;
  src: string;
}

export default class Cards extends Component<Props[]> {
  render() {
    const cards = this.props;
    return (
      <>
        <SearchBar />
        <div className={styles.cards}>
          {Object.values(cards).map((post, index) => (
            <CardItem key={index} {...post} />
          ))}
        </div>
      </>
    );
  }
}
