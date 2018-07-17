import React from 'react'
import '../assets/css/Board.css'
import Square from './Square'; 
   
export default class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            square:Array(9).fill(null),
            isXNext: true,
        };
    }

    //creating a copy of squares //changing X and O  
    handleClick(i){
        const square = this.state.square.slice();
        if(this.calculateWinner(square) || square[i]){
            return;
        }
        square[i] = this.state.isXNext?"X":"O";
        this.setState({
            square: square,
            isXNext: !this.state.isXNext,
        })
    }

    // passing value and onclick as a prop to the square component
    renderSquare(i){
        return(
            <Square 
                value={this.state.square[i]}
                onClick={()=>this.handleClick(i)}
            />
        );        
    }

    calculateWinner(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }
          return null;
        }
    

    render(){                                                                                    
        const winner = this.calculateWinner(this.state.square)
        let status;
        if(winner) {
            status = "Winner:" + winner;
        }else{
            status = "Next Player:" + (this.state.isXNext?"X":"O");
        }

        return (
            <div>
                <div className='status'>{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                    <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}