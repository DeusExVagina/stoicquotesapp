import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

//From: https://codepen.io/zebapy/pen/LGjyWJ

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: {},
      quote: '',
      author: '',

      count: 0
    };
  }
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/DeusExVagina/stoicquotesapp/master/JSONFIles/quotes.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quotes: data.quotes,
          quote:getQuote(data.quotes).quote,
          author:getQuote(data.quotes).author
          });

      });

  }

  _randomAll() {
    var quote = '';
    console.log(this.state.quotes.length)
    var quote = getQuote(this.state.quotes).quote;
    var author = getQuote(this.state.quotes).author;
    this.setState({
      quote: quote,
      author: author
    })
  };

  handleGetNameClick = (e) => {

  };

  render() {    
    const { quote } = this.state;    
    return (
      <div className="container">
        <div class="notepaper">
          <figure class="quote">
            <blockquote class="curly-quotes" cite="https://www.youtube.com/watch?v=qYLrc9hy0t0">
            {this.state.quote}
            </blockquote>
            <figcaption class="quote-by">— {this.state.author}</figcaption>
          </figure>
        </div>
        <div className="m-y">
          <button className="btn btn-random" onClick={this._randomAll.bind(this)}>Generate random stoic quote</button>
        </div>
        
        <small className="randomize-note">Like this thing?</small>
        <Button name="firstName" onClick="https://keypressingmonkey.com">My Website</Button>
        <Button name="lastNamePrefix" onClick="https://www.youtube.com/channel/UCMdFN7FUC4HilpDBEw0uvJw">My Youtube</Button>
      </div>
    )
  };
}

function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}
function spinText(inputString) {
  //copied from: https://ctrlq.org/code/20277-javascript-spintax

  var matches, options, random;

  var regEx = new RegExp(/{([^{}]+?)}/);

  while ((matches = regEx.exec(inputString)) !== null) {
    options = matches[1].split("|");
    random = Math.floor(Math.random() * options.length);
    inputString = inputString.replace(matches[0], options[random]);
  }
  return inputString;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Button = ({ name, onClick, children }) => {
  return (
    <form method="get" action={onClick} target="_blank">
      <input className="btn btn-randomize-namepart" type="submit" name={name} value={children} /></form>
  )
}

function getQuote(quotes) {
  var quote = '';
  quote = getRandom(quotes)
  return quote;

}


