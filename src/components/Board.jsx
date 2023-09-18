import React, { useState } from "react";
import Boxes from "./Boxes";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  var [bool, setBool] = useState(true);

  var winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = winner + " Winner";
  } else {
    status = "Next player: " + (bool ? "X" : "O");
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (bool) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setBool(!bool);
  }

  function renderBox(i) {
    return <Boxes value={squares[i]} onHandleClick={() => handleClick(i)} />;
  }

  return (
    <div>
      <div className="fw-bolder text-uppercase lh-lg font-monospace">
        {status}
      </div>
      <div className="board">
        <div className="board-row">
          {renderBox(0)}
          {renderBox(1)}
          {renderBox(2)}
        </div>
        <div className="board-row">
          {renderBox(3)}
          {renderBox(4)}
          {renderBox(5)}
        </div>
        <div className="board-row">
          {renderBox(6)}
          {renderBox(7)}
          {renderBox(8)}
        </div>
      </div>
    </div>
  );
}

export default Board;
