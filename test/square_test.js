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
    assert.strictEqual(comp.getDOMNode().className, 'square-NONE');
  });

  it("shows an X square", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Square, { value: 'X' })
    );

    comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    assert.strictEqual(comp.getDOMNode().className, 'square-X');
  });

  it("shows an O square", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Square, { value: 'O' })
    );

    comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    assert.strictEqual(comp.getDOMNode().className, 'square-O');
  });

});
