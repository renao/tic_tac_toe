var
  React = require("react/addons"),
  TestUtils = React.addons.TestUtils,
  Square = require("square");
  assert = require("chai").assert;

describe("Square component", function(){

  it("shows an empty square", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Square)
    );

    comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    assert.strictEqual(comp.getDOMNode().className, 'square-value-NONE square-position-0-0');
  });

  it("shows an X square", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Square, { value: 'X', x: 1, y: 2 })
    );

    comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    assert.strictEqual(comp.getDOMNode().className, 'square-value-X square-position-1-2');
  });

  it("shows an O square", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Square, { value: 'O', x: 2, y: 1 })
    );

    comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    assert.strictEqual(comp.getDOMNode().className, 'square-value-O square-position-2-1');
  });

});
