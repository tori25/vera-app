import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function hanleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => hanleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => hanleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => hanleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => hanleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => hanleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => hanleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => hanleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => hanleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => hanleClick(8)} />
      </div>
    </>
  );
}
