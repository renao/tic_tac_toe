"use strict";

var
  React = require("react");

module.exports = React.createClass({
  propTypes: {
    value: React.PropTypes.element.string
  },

  getDefaultProps: function() {
    return {
      value: 'empty'
    };
  },
  render: function() {
    var className = "square-" + this.props.value;
    return (
      <div className={className}></div>
    );
  }
});
