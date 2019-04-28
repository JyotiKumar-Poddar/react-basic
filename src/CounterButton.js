import React, { Component, useState } from 'react';


export default function CounterButton(props) {

    return (
        <button onClick={props.handleUpdate}>+ {props.counter} </button>
    );

}

/**
 export default function CounterButton() {
    const [clickCount, setClcikValueCount] = useState();  // React hock
    const handleClick = () => setClcikValueCount(clickCount + 1);
    return (
        <button onClick={handleClick}>{clickCount} From Button </button>
    );

} */
