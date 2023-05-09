import React, { useState } from "react";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]; // todas las posibles combinaciones ganadoras

export default function Tateti() {
  const [turn, setTurn] = useState("X"); // arranca el turno el jugador X
  const [squares, setSquares] = useState(Array(9).fill(null)); // tengo 9 cuadraditos y los pongo en null
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({ X: 0, O: 0 }); // arranco el score en 0 para ambos jugadores

  const reset = () => {
    setTurn("X"); // arranca el turno el jugador X
    setSquares(Array(9).fill(null)); // tengo 9 cuadraditos y los pongo en null
    setWinningSquares([]); // no hay ganador
  };

  const checkForWinner = (newSquares) => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (
        newSquares[a] &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
        // si existe "a", si "a" es igual a "b" y si "a" es igual a "c" entonces hay un ganador
      ) {
        endGame(newSquares[a], winningPositions[i]); // si hay un ganador, llamo a la funcion endGame y le paso el ganador X u O y la posicion ganadora
        return;
      }
    }

    // chequeo si hay empate
    if (!newSquares.includes(null)) {
      // si no hay ningun cuadrado en null entonces es empate
      endGame(null, Array.from(Array(10).keys())); // le paso null porque no hubo ganador y le paso un array de 10 posiciones para animar todos los cuadrados del tablero
      return;
    }
    setTurn(turn === "X" ? "O" : "X"); // si no hay ganador, cambio el turno
  };

  const handleClick = (square) => {
    const newSquares = [...squares]; // hago una copia del estado squares
    newSquares.splice(square, 1, turn); // reemplazo el valor del cuadrado que clickeo por el turno actual(X u O)
    setSquares(newSquares); // actualizo el estado squares con el nuevo valor
    checkForWinner(newSquares); // chequeo si hay ganador
  };

  const endGame = (result, winningPositions) => {
    setTurn(null); // seteo el turno en null para que no se pueda seguir jugando(clickando)
    if (result !== null) {
      // si el resultado no es null, es decir, si hay un ganador
      setScore({
        ...score, // copio el estado score
        [result]: score[result] + 1, // sumo 1 al score del ganador
      });
    }
    setWinningSquares(winningPositions); // seteo el estado winningSquares con la posicion ganadora
    setTimeout(reset, 3000); // despues de 3 segundos reseteo el juego
  };

  return (
    <div className="container">
      <Board
        winningSquares={winningSquares}
        squares={squares}
        turn={turn}
        handleClick={handleClick}
      />
      <ScoreBoard scoreO={score.O} scoreX={score.X} />
    </div>
  );
}
