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
    assert.strictEqual(comp.getDOMNode().className, 'square-empty');
  });

  it("shows an X square", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Square, { value: 'x' })
    );

    comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    assert.strictEqual(comp.getDOMNode().className, 'square-x');
  });

  it("shows an O square", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Square, { value: 'o' })
    );

    comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'div');
    assert.strictEqual(comp.getDOMNode().className, 'square-o');
  });

});
