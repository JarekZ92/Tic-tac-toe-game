import React, { Component } from "react";

import Square from './SquareComponent'

class Board extends Component {
  renderSquare(i) {
    return <Square value ={i} />
  }


export default Board;
