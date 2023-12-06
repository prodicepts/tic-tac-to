import React, { useState } from "react";
import './css/App.css';
import Button from "../OtherComponents/Button";

const App = () => {
    const [squares, setSquares ] = useState(Array(9).fill(null));
    const [isnext, setIsNext] = useState(false);
    const wins = () => {
        const lines = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]
                      ];
        for (let index = 0; index < lines.length; index++) {
            const [a, b, c] = lines[index];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
              }
        }
        return null;

    }
    const handleClicks = (i) =>{
        if(squares[i] || wins(squares))return;
        const nextSquare = squares.slice();
        nextSquare[i] =  isnext ? 'O':'X';
        setSquares(nextSquare);
        setIsNext(!isnext);
    }

    const winner = wins(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (isnext ? 'O' : 'X');
    }
    return (
        <div className="app">
            <span>{status}</span>
            <div className="row">
                <Button value = {squares[0]} clicks = {() => handleClicks(0)}/>
                <Button value = {squares[1]} clicks = {() => handleClicks(1)}/>
                <Button value = {squares[2]} clicks = {() => handleClicks(2)}/>
            </div>

            <div className="row">
                <Button value = {squares[3]} clicks = {() => handleClicks(3)}/>
                <Button value = {squares[4]} clicks = {() => handleClicks(4)}/>
                <Button value = {squares[5]} clicks = {() => handleClicks(5)}/>
            </div>

            <div className="row">
                <Button value = {squares[6]} clicks = {() => handleClicks(6)}/>
                <Button value = {squares[7]} clicks = {() => handleClicks(7)}/>
                <Button value = {squares[8]} clicks = {() => handleClicks(8)}/>
            </div>

            
            
        </div>
    );
}

export default App;