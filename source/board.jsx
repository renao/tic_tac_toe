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

  createRow: function(row, cells) {
    var rowElements = [];
    var onClickSquare = this.props.onClickSquare;
    for (var col = 1; col <= cells.length; col += 1) {
      var value = cells[col - 1];
      var square = React.createElement(Square, {
        value: value, col: col, row: row, onClick: onClickSquare
      })
      rowElements.push(square);
    }
    return (
      <div class="row">{rowElements}</div>
    )
  },

  render: function() {
    var output = [];
    var values = this.props.values;

    for (var row = 1; row <= values.length; row +=1) {
      var line = this.createRow(row, values[row - 1]);
      output.push(line);
    }

    return (
      <div className="board">{output}</div>
    );
  }
});
