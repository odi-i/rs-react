import React, { ChangeEvent, Component } from 'react';
import styles from './SearchBar.module.scss';

export default class SearchBar extends Component<Record<string, never>> {
  constructor(props: Record<string, never>) {
    super(props);
    this.onUnload = this.onUnload.bind(this);
  }

  state = {
    search: '',
  };

  onUnload = () => {
    localStorage.setItem('text', this.state.search);
  };

  componentDidMount() {
    window.addEventListener('beforeunload', this.onUnload);

    const a = localStorage.getItem('text');
    this.setState(() => ({
      search: a !== null ? a : ' ',
    }));
  }

  componentWillUnmount() {
    this.onUnload();
    window.removeEventListener('beforeunload', this.onUnload);
  }

  updateText(e: ChangeEvent<HTMLInputElement>) {
    this.setState(() => ({
      search: e.target.value,
    }));
  }

  render() {
    return (
      <div>
        <form name="search">
          <input
            type="text"
            className={styles.input}
            onChange={(event) => this.updateText(event)}
            value={this.state.search}
          ></input>
        </form>
      </div>
    );
  }
}
