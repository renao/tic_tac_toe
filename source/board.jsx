"use strict";

var
  React = require("react"),
  Square = require("square");

module.exports = React.createClass({
  propTypes: {
    cols: React.PropTypes.number.isRequired,
    rows: React.PropTypes.number.isRequired,
    // TODO add isRequired?
    squares: [React.PropTypes.instanceOf(Square)]
  },

  getDefaultProps: function() {
    return {
      cols: 0,
      rows: 0,
      squares: []
    }
  },

  render: function() {
    return (
      <div></div>
    );
  }
});
