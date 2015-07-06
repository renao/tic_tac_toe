"use strict";

var
  React = require("react");

module.exports = React.createClass({
  propTypes: {
    value: React.PropTypes.oneOf(['O', 'X', 'NONE']),
    col: React.PropTypes.number.isRequired,
    row: React.PropTypes.number.isRequired
  },

  getDefaultProps: function() {
    return {
      value: 'NONE',
      col: 0,
      row: 0
    };
  },
  render: function() {
    var value = this.props.value;
    var col = this.props.col;
    var row = this.props.row;
    var className = `square-value-${value} square-position-${col}-${row}`
    return (
      <div className={className}></div>
    );
  }
});
