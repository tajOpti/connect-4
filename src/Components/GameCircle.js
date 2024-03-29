import React from "react";


const onClick = () => {
    alert('on click');
}

const GameCircle = (props) => {
    return (
        <div onClick={onClick}>
            GameCircle - id {props.id}
        </div>
    )
}


export default GameCircle;