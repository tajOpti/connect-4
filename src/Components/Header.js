import React from "react";
import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN } from '../constants';

const Header = ({ gameState, currentPlayer, winPlayer }) => {

    const renderlabel = () => {
        switch (gameState) {
            case GAME_STATE_PLAYING:
                return <div>player {currentPlayer} turn</div>
            case GAME_STATE_WIN:
                return <div>player {winPlayer} wins</div>
            case GAME_STATE_DRAW:
                return <div>Game is a draw</div>
            default:
                return null;
        }
    }

    return (
        <div className="panel header">
            <div className="header-text">
                {renderlabel()}
            </div>
        </div>
    )
}


export default Header;