import CardItemForForms from '../../components/CardItemForForms/CardItemForForms';
import React, { Component, FormEvent } from 'react';
import styles from './Forms.module.scss';

interface Card {
  name: string;
  description: string;
  color: string;
  date: string;
  gender: string;
  src: string;
}

export default class Forms extends Component<Record<string, never>, { cards: Card[] }> {
  textInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  colorInput: React.RefObject<HTMLSelectElement>;
  checkboxInput_1: React.RefObject<HTMLInputElement>;
  checkboxInput_2: React.RefObject<HTMLInputElement>;
  checkboxInput_3: React.RefObject<HTMLInputElement>;
  checkboxInput_4: React.RefObject<HTMLInputElement>;
  radioInput_1: React.RefObject<HTMLInputElement>;
  radioInput_2: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, never>) {
    super(props);
    this.state = { cards: [] };

    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.colorInput = React.createRef();
    this.checkboxInput_1 = React.createRef();
    this.checkboxInput_2 = React.createRef();
    this.checkboxInput_3 = React.createRef();
    this.checkboxInput_4 = React.createRef();
    this.radioInput_1 = React.createRef();
    this.radioInput_2 = React.createRef();
    this.fileInput = React.createRef();
  }

  handleSubmit = (event: FormEvent) => {
    const card: Card = {
      name: '',
      description: '',
      color: '',
      date: '',
      gender: '',
      src: '',
    };
    if (this.textInput.current) card.name = this.textInput.current?.value;
    if (this.dateInput.current) card.date = this.dateInput.current?.value;
    if (this.colorInput.current) card.color = this.colorInput.current?.value;
    [this.checkboxInput_1, this.checkboxInput_2, this.checkboxInput_3, this.checkboxInput_4].map(
      (item) => {
        if (item.current && item.current.checked) card.description += item.current.value + ' ';
      }
    );
    [this.radioInput_1, this.radioInput_2].map((item) => {
      if (item.current && item.current.checked) card.gender = item.current.value;
    });
    if (this.fileInput.current?.files !== null && this.fileInput.current?.files !== undefined)
      card.src = URL.createObjectURL(this.fileInput.current?.files[0]);

    this.setState({ cards: [...this.state.cards, card] });

    (event.target as HTMLFormElement).reset();

    event.preventDefault();
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <div className={styles.first_inputs}>
            <input type="text" ref={this.textInput} className={styles.input}></input>
            <input type="date" ref={this.dateInput} className={styles.input}></input>
            <select ref={this.colorInput} className={styles.input}>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className={styles.second_inputs}>
            <div>
              <div>
                <input
                  type="checkbox"
                  ref={this.checkboxInput_1}
                  name="chocolate"
                  value="chocolate"
                ></input>
                <label className={styles.checkbox_input}>Chocolate</label>
              </div>
              <div>
                <input type="checkbox" ref={this.checkboxInput_2} name="cake" value="cake"></input>
                <label className={styles.checkbox_input}>Cake</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  ref={this.checkboxInput_3}
                  name="donut"
                  value="donut"
                ></input>
                <label className={styles.checkbox_input}>Donut</label>
              </div>
              <div>
                <input type="checkbox" ref={this.checkboxInput_4} name="bun" value="bun"></input>
                <label className={styles.checkbox_input}>Bun</label>
              </div>
            </div>
            <div className={styles.radio}>
              <label>
                <input
                  ref={this.radioInput_1}
                  className={styles.radio_input}
                  type="radio"
                  name="radio"
                  value="male"
                  defaultChecked
                />
                Male
              </label>
              <label>
                <input
                  ref={this.radioInput_2}
                  className={styles.radio_input}
                  type="radio"
                  name="radio"
                  value="female"
                />
                Female
              </label>
            </div>
            <label className={styles.input_file}>
              <input ref={this.fileInput} type="file" name="file"></input>
              <span className={styles.input_file_btn}>Выберите файл</span>
            </label>
          </div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
        <div className={styles.cards}>
          {this.state.cards.map((item, index) => (
            <CardItemForForms key={index} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
