var
  React = require("react/addons"),
  TestUtils = React.addons.TestUtils,
  Game = require("game");
  assert = require("chai").assert;

describe("The Game", function(){

  it("shows an initial game", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Game)
    );

    comp = TestUtils.findRenderedDOMComponentWithClass(rendered, 'board');
    assert.strictEqual(comp.getDOMNode().children.length, 3 * 3);

  });
});
