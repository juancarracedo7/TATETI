import React, { useState } from "react";
import classNames from "classnames";
import "../square.css";

export default function Square({ value, onClick, turn, winner }) {
  const handleClick = () => {
    turn !== null && value === null && onClick(); // si es el turno de X u O y el cuadrado esta vacio(es null), entonces puedo clickear
  };

  let squareClass = classNames({
    square: true, // siempre va a tener la clase square
    [`square--${value}`]: value !== null, // si no es null asignale la clase square--X o square--O
    winner: winner, // si es el ganador, asignale la clase winner
  });

  return <div className={squareClass} onClick={() => handleClick()}></div>;
}
