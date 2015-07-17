"use strict";

var
  React = require("react");

module.exports = React.createClass({
  propTypes: {
    currentPlayer: React.PropTypes.string.isRequired
  },

  render: function() {
    var className = 'player player-' + this.props.currentPlayer;
    return (
      <div className={className}>
        <span class='label'>Current Player: </span>
      </div>
    );
  }
});
