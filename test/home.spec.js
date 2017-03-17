import React from 'react';
import fetch from 'isomorphic-fetch';
import chai from 'chai';
import sinon from 'sinon';
import { spy } from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Home from '../src/components/Home';

describe('<Home />', () => {

  it('calls componentDidMount', () => {
    spy(Home.prototype, 'componentDidMount');
    const wrapper = mount(<Home />);
    expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});
