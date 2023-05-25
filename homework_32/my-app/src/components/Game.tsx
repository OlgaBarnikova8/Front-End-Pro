import { useState } from "react";

import calculateWinner from "../helpers/calculateWinner";
import { SquareValue } from "../types";
import Board from "./Board";

type HistoryState = {
  squares: SquareValue[];
}[];

const Game = () => {
  const [history, setHistory] = useState<HistoryState>([
    {
      squares: Array(9).fill(null)
    }
  ]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXisNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];

    const isWinner = calculateWinner(squares);
    if (squares[index] || isWinner) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";

    setHistory([
      ...newHistory,
      {
        squares
      }
    ]);
    setStepNumber(newHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step: number) => () => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>

      <div className="game-info">
        <div>{status}</div>

        <ol>
          {history.map((step, index) => {
            const isStartStep = index === 0;

            return (
              <li key={index}>
                <button onClick={jumpTo(index)}>
                  {isStartStep ? `Go to game start` : `Go to move #${index}`}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Game;
