"use strict";

var
  React = require("react"),
  Square = require("square"),
  Board = require("board");

module.exports = React.createClass({
  render: function(){
    var values = [
      "NONE",
      "O",
      "NONE",

      "X",
      "NONE",
      "O",

      "NONE",
      "X",
      "NONE"
    ];

    var cols = 3;
    var rows = 3;

    return (
      <Board cols={cols} rows={rows} values={values}/>
    );
  }
});
