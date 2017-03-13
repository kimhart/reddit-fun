import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import fetch from 'isomorphic-fetch';
import request from 'request';
import chai from 'chai';
import sinon from 'sinon';
import { spy } from 'sinon';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Home from '../src/components/Home';
import SubredditCluster from '../src/components/SubredditCluster';
var MockFetch = require('mock-fetch-api');

describe('<Home />', () => {

  it('calls componentDidMount', () => {
  spy(Home.prototype, 'componentDidMount');
    const wrapper = mount(<Home />);
    expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});
