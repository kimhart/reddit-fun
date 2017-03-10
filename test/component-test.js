require('./dom-mock')('<html><body></body></html>');

const jsdom = require('mocha-jsdom');
const assert = require('assert');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

describe('Testing home text', function() {
  jsdom({ skipWindowCheck: true });

  it('should contain text: Reddit', function() {
    const Home = require('../src/components/Home.js');
    const homeDiv = TestUtils.renderIntoDocument(
      <Home />
    );
    const homeText = TestUtils.findRenderedDOMComponentWithTag(homeDiv, 'h2');

    assert.equal(homeText.textContent, 'Reddit');
  });
});