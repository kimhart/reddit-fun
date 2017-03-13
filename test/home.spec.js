import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Home from '../src/components/Home';

describe('<Home />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });

  // it('renders an `.icon-star`', () => {
  //   const wrapper = shallow(<Home />);
  //   expect(wrapper.find('.icon-star')).to.have.length(1);
  // });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow(
  //     <Home>
  //       <div className="unique" />
  //     </Home>
  //   );
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(
  //     <Foo onButtonClick={onButtonClick} />
  //   );
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});