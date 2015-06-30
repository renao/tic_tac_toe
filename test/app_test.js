var 
  React = require("react/addons"),
  TestUtils = React.addons.TestUtils,
  App = require("app"),
  Board = require("board");

  assert = require("chai").assert;

describe("App component", function(){

  it("Display headline", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(App)
    );

    TestUtils.findRenderedComponentWithType(rendered, Board);
  });

});
