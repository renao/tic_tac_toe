"use strict";

var
  React = require("react"),
  Square = require("square");

module.exports = React.createClass({
  propTypes: {
    cols: React.PropTypes.number.isRequired,
    rows: React.PropTypes.number.isRequired,
    // TODO ?
    values: [React.PropTypes.isRequired]
  },

  getDefaultProps: function() {
    return {
      cols: 0,
      rows: 0,
      values: []
    }
  },

  render: function() {
    var output = [];
    var cols = this.props.cols;
    var rows = this.props.rows;
    var values = this.props.values;

    var index = 0;
    for (var row = 1; row <= rows; row += 1) {
      for (var col = 1; col <= cols; col += 1) {
        var value = values[index];
        var square = React.createElement(Square, { value: value, col: col, row: row })
        output.push(square);
        index += 1;
      }
    }

    return (
      <div className="board">{output}</div>
    );
  }
});
