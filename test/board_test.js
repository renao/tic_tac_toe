var
  React = require("react/addons"),
  TestUtils = React.addons.TestUtils,
  Board = require("board");
  assert = require("chai").assert;

describe("Board component", function(){

  it("shows an empty board", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Board)
    );

    comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    assert.strictEqual(comp.getDOMNode().textContent, '');
  });

});
