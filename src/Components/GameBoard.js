import React, { useState } from "react";
import '../Game.css';
import GameCircle from "./GameCircle";


const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {

    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    console.log(gameBoard);

    const cicleClicked = (id) => {
        console.log(`circle clicked ${id}`);
        gameBoard[id] = currentPlayer;
        setGameBoard(gameBoard);

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

        console.log(gameBoard);
    }

    const renderCircle = id => {
        return <GameCircle id={id} className={`player_${gameBoard[id]}`} onCircleClicked={cicleClicked}></GameCircle>
    }

    return (
        <div className="gameBoard">
            {renderCircle(0)}
            {renderCircle(1)}
            {renderCircle(2)}
            {renderCircle(3)}
            {renderCircle(4)}
            {renderCircle(5)}
            {renderCircle(6)}
            {renderCircle(7)}
            {renderCircle(8)}
        </div>
    )
}


export default GameBoard;