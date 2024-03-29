import React from "react";
import '../Game.css';
import GameCircle from "./GameCircle";

const GameBoard = () => {


    const cicleClicked = (id) => {
        console.log(`circle clicked ${id}`);
    }

    return (
        <div className="gameBoard">
            <GameCircle id={1} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={2} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={3} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={4} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={5} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={6} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={7} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={8} onCircleClicked={cicleClicked}>

            </GameCircle>

            <GameCircle id={9} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={10} onCircleClicked={cicleClicked}>

            </GameCircle>

            <GameCircle id={11} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={12} onCircleClicked={cicleClicked}>

            </GameCircle>

            <GameCircle id={13} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={14} onCircleClicked={cicleClicked}>

            </GameCircle>

            <GameCircle id={15} onCircleClicked={cicleClicked}>

            </GameCircle>
            <GameCircle id={16} onCircleClicked={cicleClicked}>

            </GameCircle>
        </div>
    )
}


export default GameBoard;