import React, { useState, useEffect } from "react";
import '../Game.css';
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner, isDraw } from '../Helper';
import { NO_PLAYER, PLAYER_1, PLAYER_2, NO_CIRCLES, GAME_STATE_PLAYING, GAME_STATE_IDLE, GAME_STATE_WIN, GAME_STATE_DRAW } from '../constants';


const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

    console.log(gameBoard);


    useEffect(() => {
        initGame();
    }, []);


    const initGame = () => {
        console.log('initialize game');
        setGameBoard(Array(16).fill(NO_PLAYER));
        setCurrentPlayer(PLAYER_1);
        setGameState(GAME_STATE_PLAYING);
    }

    const initBoard = () => {
        const circles = [];

        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    const cicleClicked = (id) => {
        console.log(`circle clicked ${id}`);
        if (gameBoard[id] != NO_PLAYER) {
            return;
        }
        if (gameState !== GAME_STATE_PLAYING) {
            return;
        }

        if (isWinner(gameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }
        if (isDraw(gameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);
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
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer onClickEvent={initGame} />
        </>
    )
}


export default GameBoard;