 "use strict";

var
  React = require("react"),
  Board = require("board");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      currentPlayer: "X",
      values: [
        [
          "NONE",
          "NONE",
          "NONE",
        ],

        [
          "NONE",
          "NONE",
          "NONE",
        ],

        [
          "NONE",
          "NONE",
          "NONE",
        ]
      ],
      cols: 3,
      rows: 3
    };
  },

  handleSquareClick(col, row) {
    var newValue = this.state.currentPlayer;
    if (this.state.values[row - 1][col - 1] === "NONE") {
      this.state.values[row - 1][col - 1] = newValue;
      this.setState({ values: this.state.values });
      this.nextPlayer();
    }
  },

  nextPlayer: function() {
    this.state.currentPlayer = this.state.currentPlayer == "X" ? "O" : "X";
    this.setState({ currentPlayer: this.state.currentPlayer });
  },

  render: function() {
    return (
      <Board
        cols={this.state.cols}
        rows={this.state.rows}
        values={this.state.values}
        onClickSquare={this.handleSquareClick}
        />
    );
  }
});
