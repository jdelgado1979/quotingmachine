import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.js';
import './App.css';
import Presentational from './App';
import reportWebVitals from './reportWebVitals';

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const Quotes = {
  1 : {quote:'Whether you think you can or you think you can’t, you’re right.', author:'- Henry Ford'},
  2 : {quote:'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.', author:'- Michael Jordan'},
  3 : {quote:'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.', author:'- Sheryl Sandberg'},
  4 : {quote:'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.', author:'- Aristotle'},
  5: {quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.', author:'- Aristotle'},
  6: {quote:'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.', author:'- Plato'},
  7: {quote: 'Winning isn’t everything, but wanting to win is.', author:'- Vince Lombardi'},
  8: {quote: 'A person who never made a mistake never tried anything new.', author:'- Albert Einstein'},
  9: {quote: 'Everything you’ve ever wanted is on the other side of fear.', author:'- George Addair'},
  10: {quote: 'People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.', author:'- Zig Ziglar'},
  11: {quote: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.', author:'- Dalai Lama'},
  12: {quote: 'Teach thy tongue to say, “I do not know,” and thou shalt progress.', author:'- Maimonides'},
  13: {quote: 'Too many of us are not living our dreams because we are living our fears.', author:'- Les Brown'},
  14: {quote: 'Fall seven times and stand up eight.', author:'- Japanese Proverb'},
  15: {quote: 'Believe you can and you’re halfway there.', author:'- Theodore Roosevelt'},
  16: {quote: 'Everything has beauty, but not everyone can see.', author:'- Confucius'},
  17: {quote: 'Education costs money. But then so does ignorance.', author:'- Sir Claus Moser'},
  18: {quote: 'Nothing is impossible, the word itself says, “I’m possible!”', author:'- Audrey Hepburn'},
  19: {quote: 'Certain things catch your eye, but pursue only those that capture the heart.', author:'- Ancient Indian Proverb'},
  20: {quote: 'Life isn’t about getting and having, it’s about giving and being.', author:'- Kevin Kruse'},
  21: {quote: 'When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.', author:'- John Lennon'},
  22: {quote: 'It’s not the years in your life that count. It’s the life in your years.', author:'- Abraham Lincoln'}

}

class QuoteBox extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
   number:parseInt(Object.keys(Quotes)[0]),
   quote: Quotes[1].quote,
   author: Quotes[1].author,
   number2: colors[0],
   color1: colors[0],

  }
  this.chooseQuote = this.chooseQuote.bind(this);
  this.chooseColor = this.chooseColor.bind(this);
  }
  
chooseQuote() {
let x = Math.floor((Math.random() * Object.keys(Quotes).length)+1);
if(x == this.state.number) {
  while(x == this.state.number){
x = Math.floor((Math.random() * Object.keys(Quotes).length)+1);
 this.setState({
   quote: Quotes[x].quote,
   author:Quotes[x].author,
   number: x
  });
    } 
} else{ 
    this.setState({
    quote: Quotes[x].quote,
    author:Quotes[x].author,
    number: x
  });
  }
}
 
chooseColor() {
let x = Math.floor(Math.random() * colors.length);
if(x == this.state.number2) {
  while(x == this.state.number2){
x = Math.floor(Math.random() * colors.length);
 this.setState({
   color1: colors[x],
   number2: x
   });
    } 
} else { 
    this.setState({
    color1: colors[x],
    number2: x
  });
  }
}


   
render() {
return (
<div>
<Presentational  quote={this.state.quote} author={this.state.author}  
color1={this.state.color1} chooseQuote={this.chooseQuote} chooseColor={this.chooseColor}/>
</div>
     );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuoteBox />, 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
