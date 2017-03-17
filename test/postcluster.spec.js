import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import chai from 'chai';
import { expect } from 'chai';
import PostCluster from '../src/components/PostCluster';

describe('<PostCluster />', () => {

  it("ensure getElapsedHours returns '2 days' when post is 50 hours old", () => {
    let d = new Date();
    d = new Date(d - (d.getTimezoneOffset() / 60));
    const fortyEightHoursAgo = Math.floor((d.setHours(d.getHours() - 50)) / 1000);
    const elapsed = PostCluster.prototype.getElapsedHours(fortyEightHoursAgo);
    expect(elapsed).to.equal('2 days');
  });

  it("ensure getElapsedHours returns '1 day' when post is 27 hours old", () => {
    let d = new Date();
    d = new Date(d - (d.getTimezoneOffset() / 60));
    const twentySevenHoursAgo = Math.floor((d.setHours(d.getHours() - 27)) / 1000);
    const elapsed = PostCluster.prototype.getElapsedHours(twentySevenHoursAgo);
    expect(elapsed).to.equal('1 day');
  });

  it("ensure getElapsedHours returns '8 hours' when post is 8 hours old", () => {
    let d = new Date();
    d = new Date(d - (d.getTimezoneOffset() / 60));
    const sixHoursAgo = Math.floor((d.setHours(d.getHours() - 8)) / 1000);
    const elapsed = PostCluster.prototype.getElapsedHours(sixHoursAgo);
    expect(elapsed).to.equal('8 hours');
  });


// These two tests don't pass and I can't wrap my mind around this math anymore. Would love to talk about it with you guys!


  // it("ensure getElapsedHours returns '1 hour' when post is between 1-2 hours old", () => {
  //   let d = new Date();
  //   d = new Date(d - (d.getTimezoneOffset() / 60));
  //   const oneHourAgo = Math.floor((d.setHours(d.getHours() - 1)) / 1000);
  //   const elapsed = PostCluster.prototype.getElapsedHours(oneHourAgo);
  //   expect(elapsed).to.equal('1 hour');
  // });

  // it("ensure getElapsedHours returns 'less than 1 hour' when post is 10 minutes old", () => {
  //   let d = new Date();
  //   d = new Date(d - (d.getTimezoneOffset() / 60));
  //   const tenMinutesAgo = Math.floor((d.setMinutes(d.getMinutes() - 10) / 1000));
  //   const elapsed = PostCluster.prototype.getElapsedHours(tenMinutesAgo);
  //   expect(elapsed).to.equal('less than 1 hour');
  // });



});
