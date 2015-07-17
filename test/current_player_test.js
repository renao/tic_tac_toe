var
  React = require("react/addons"),
  TestUtils = React.addons.TestUtils,
  CurrentPlayer = require("current_player");
  assert = require("chai").assert;

describe("CurrentPlayer component", function(){

  it("shows an X square", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(CurrentPlayer, { currentPlayer: 'X' })
    );

    comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    assert.strictEqual(comp.getDOMNode().className, 'player player-X');
    assert.strictEqual(comp.getDOMNode().textContent, 'Current Player: ');
  });
});
