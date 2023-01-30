import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.js';
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
}

class QuoteBox extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
   number:parseInt(Object.keys(Quotes)[0]),
   quote: Quotes[1].quote,
   author: Quotes[1].author,
   number2: colors[0],
   color1: colors[0]
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
