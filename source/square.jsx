"use strict";

var
  React = require("react");

module.exports = React.createClass({
  propTypes: {
    value: React.PropTypes.oneOf(['O', 'X', 'NONE']),
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  },

  getDefaultProps: function() {
    return {
      value: 'NONE',
      x: 0,
      y: 0
    };
  },
  render: function() {
    var value = this.props.value;
    var x = this.props.x;
    var y = this.props.y;
    var className = `square-value-${value} square-position-${x}-${y}`
    return (
      <div className={className}></div>
    );
  }
});
