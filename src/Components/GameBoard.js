import React, { useState } from "react";
import '../Game.css';
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";
import isWinner from '../Helper';

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;
const NO_CIRCLES = 16;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    console.log(gameBoard);


    const initBoard = () => {
        const circles = [];

        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    const cicleClicked = (id) => {
        console.log(`circle clicked ${id}`);


        if (isWinner(gameBoard, id, currentPlayer)) {
            alert('winner ' + currentPlayer);
        }
        // this is done to prevent mutation of the original array
        // just destructure it to make a copy of the tracked array
        setGameBoard(prevCircles => {
            return prevCircles.map((circle, pos) => {
                if (pos === id) return currentPlayer
                return circle;
            })
        })
        // then change the array element to the player value
        // change state by passing the copied array and passing it in
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        console.log(currentPlayer);
        console.log(gameBoard);
    }

    const renderCircle = id => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={cicleClicked}></GameCircle>
    }



    return (
        <>
            <Header player={currentPlayer} />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer />
        </>
    )
}


export default GameBoard;