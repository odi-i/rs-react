import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';

interface Props {
  id: Number;
  name: string;
  description: string;
  color: string;
  price: number;
  rating: number;
  src: string;
}

const name = [
  'Компьютер',
  'Телефон',
  'Влад',
  'Матвей',
  'Презерватив',
  'Счастье',
  'Печень',
  'Энернетик',
  'Машина',
  'Курсач',
];

const description = [
  'Самое нужное в жизни',
  'Хороший товар',
  'По скидке для нуждающих',
  'Купи, не пожалеешь',
  'Использовать осторожно',
  'Использовать активно',
  'Плохой товар',
  'Покупать оптом',
  'Для активных людей',
  'Яркий дизайн',
];

const color = [
  'синий',
  'красный',
  'зеленый',
  'голубой',
  'фиолетовый',
  'желтый',
  'черный',
  'белый',
  'розовый',
  'серый',
];
const src = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export const generateCards = (n = 100): Props[] => {
  const cards = [];
  for (let i = 0; i < n; i++) {
    cards.push(generateCard(i));
  }

  return cards;
};

const generateCard = (i: number): Props => ({
  id: i,
  name: name[getRandom()],
  description: description[getRandom()],
  color: color[getRandom()],
  price: Math.round(Math.random() * (10000 - 10) + 10),
  rating: Math.round(Math.random() * (100 - 1) + 1),
  src: src[getRandom()],
});

const getRandom = (): number => {
  return Math.round(Math.random() * (9 - 0) + 0);
};
