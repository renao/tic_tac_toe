var
  React = require("react/addons"),
  TestUtils = React.addons.TestUtils,
  Board = require("board"),
  Square = require("square");
  assert = require("chai").assert;

describe("Board component", function(){

  it("shows an empty board", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Board)
    );

    comp = TestUtils.findRenderedDOMComponentWithClass(rendered, 'board');
    assert.strictEqual(comp.getDOMNode().textContent, '');
  });

  it("renders 2x2 empty squares", function() {
    var values = [
      [
        "NONE",
        "O",
      ],
      [
        "X",
        "O"
      ]
    ]

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(Board, { cols: 2, rows: 2, values: values })
    );

    comp = TestUtils.findRenderedDOMComponentWithClass(rendered, 'board');
    assert.strictEqual(comp.getDOMNode().children.length, 4);
    assert.strictEqual(comp.getDOMNode().children[0].className, 'square-value-NONE square-position-1-1');
    assert.strictEqual(comp.getDOMNode().children[1].className, 'square-value-O square-position-2-1');
    assert.strictEqual(comp.getDOMNode().children[2].className, 'square-value-X square-position-1-2');
    assert.strictEqual(comp.getDOMNode().children[3].className, 'square-value-O square-position-2-2');
  });
});
