import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Functional Component 
// - only consists of a render method 
// - have to change this.props to props 
// onClick={() => props.onClick()} can be changed to onClick = {props.onClick} but NOT onClick={props.onClick()}
function Square(props) {
  return (
    // Because the parent stores the which squares are filled, 
    // need some way for the child to update the state of the parent 
    // Usual pattern is for the parent to pass down a function to the child which gets
    // called when the state needs to be changed (onClick in this case)

    <button className="square" onClick={props.onClick}>
      {props.value}
      </button>
  );
}
  
  class Board extends React.Component {
    
    // State is pulled upwards by deleting the child's constructor, adding a parent constructor 
    // and changing references to State to Prop (in the child)
    
    renderSquare(i) {
      return (
        <Square
          // passing props down to Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    
    // We want to store the state of the children (Board and Square) in the parent 
    // Game will then pass the state back down to the children via props
    // This way the child componenets are always in sync with each other and with the parent 

    constructor(props) {
      // have to explicitly call this when defining a constructor of a subclass in Javascript
      super(props);
      this.state = {
        history : [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,

        // X always goes first
        xIsNext: true, 
      };
    }
    
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length-1];
      const squares = current.squares.slice();

      // return early and ignore the click if:
      // - someone has won already 
      // - if a square is already filled
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : '0';
      
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,

        // each time we move we flip the toggle allowing X and O to take turns
        xIsNext: !this.state.xIsNext, 
      })
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      // map() creates a new aray with the result of calling a function for every array element
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start' ;
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });

      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : '0');
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
              // passing props down to Board
              squares={current.squares}
              onClick= {(i) => this.handleClick(i)}
              />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] == squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  