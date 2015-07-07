 "use strict";

var
  React = require("react"),
  Board = require("board");

module.exports = React.createClass({

  getInitialState: function() {
    return {
      values: [
      // TODO prefill NONE values (cols x rows) times
      "NONE",
      "NONE",
      "NONE",

      "NONE",
      "NONE",
      "NONE",

      "NONE",
      "NONE",
      "NONE"
      ],
      cols: 3,
      rows: 3
    };
  },

  render: function(){
    return (
      <Board
        cols={this.state.cols}
        rows={this.state.rows}
        values={this.state.values}
        />
    );
  }
});
