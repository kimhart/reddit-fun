import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import SubredditCluster from '../src/components/SubredditCluster';

// describe('<SubredditCluster />', () => {
//   it('<SubredditCluster /> component', () => {
//     const wrapper = shallow(<SubredditCluster />);
//     expect('foo').to.have.length.above(2);
//   });

  // it('renders an `.icon-star`', () => {
  //   const wrapper = shallow(<Home />);
  //   expect(wrapper.find('.icon-star')).to.have.length(1);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(
  //     <Foo onButtonClick={onButtonClick} />
  //   );
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
// }); 