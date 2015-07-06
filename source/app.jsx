"use strict";

var
  React = require("react"),
  Square = require("square"),
  Board = require("board");

module.exports = React.createClass({
  render: function(){
    var squares = [
      React.createElement(Square),
      React.createElement(Square),
      React.createElement(Square),
      React.createElement(Square),
      React.createElement(Square),
      React.createElement(Square),
      React.createElement(Square),
      React.createElement(Square),
      React.createElement(Square)
    ]

    return (
      <Board cols="3" rows="3" squares={squares}/>
    );
  }
});
