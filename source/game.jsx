 "use strict";

var
  React = require("react"),
  Board = require("board");

module.exports = React.createClass({
  getInitialState: function() {
    return {
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
    console.log(col, row);
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
