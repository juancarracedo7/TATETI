import React from "react";
import Square from "./Square";
import "../board.css";

export default function Board({ squares, handleClick, turn, winningSquares }) {
  const createSquare = (values) =>
    values.map((value) => (
      <Square
        winner={winningSquares.includes(value)} // si el valor del cuadrado esta en el array de winningSquares, entonces es el ganador
        turn={turn} 
        onClick={() => handleClick(value)} 
        value={squares[value]} 
        key={`square_${value}`}
      />
    ));

  return (
    <div className="board">
      <div className="row">{createSquare([0, 1, 2])}</div>{" "}
      {/* creo los square(cuadrados) 0 1 y 2 en la primera row */}
      <div className="row">{createSquare([3, 4, 5])}</div>{" "}
      {/* creo los square(cuadrados) 3 4 y 5 en la segunda row) */}
      <div className="row">{createSquare([6, 7, 8])}</div>{" "}
      {/* creo los square(cuadrados) 6 7 y 8 en la tercera row */}
    </div>
  );
}
