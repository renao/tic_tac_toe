"use strict";

var
  React = require("react"),
  Square = require("square");

module.exports = React.createClass({
  propTypes: {
    // TODO ?
    // values: [React.PropTypes.string]
    onClickSquare: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      values: []
    }
  },

  render: function() {
    var output = [];
    var values = this.props.values;
    var onClickSquare = this.props.onClickSquare;

    for (var row = 1; row <= values.length; row +=1) {
      for (var col = 1; col <= values[row - 1].length; col += 1) {
        var value = values[row - 1][col - 1];
        var square = React.createElement(Square, {
          value: value, col: col, row: row, onClick: onClickSquare
        })
        output.push(square);
      }
    }

    return (
      <div className="board">{output}</div>
    );
  }
});
