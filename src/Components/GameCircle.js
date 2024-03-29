import React from "react";


const onClick = () => {
    alert('on click');
}

const GameCircle = ({ id }) => {
    return (
        <div onClick={onClick}>
            GameCircle - id {id}
        </div>
    )
}


export default GameCircle;