import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import axios from 'axios';
import sinon from 'sinon'
import React from 'react'

import App from '../src/containers/App.js'
import RunDown from '../src/containers/RunDown.js'
import {default as _} from '../src/constants.js'

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });


describe('app component',() => {
  it('should work',function() {
    let promise = Promise.resolve({data:{fuckers: 'fuckers'}});
    let mock = sinon.stub(axios, 'get').returns(promise)

    let screen = mount(<App />)

    return promise.then(() => {
        expect(screen.state()).to.have.property('jsonTable')
    })
  });
  it('should render RunDown Component with setHandler as a prop', function() {
    let wrapper = shallow(<App />)

    expect(wrapper.find('RunDown').prop('handleSet')).to.be.a('function')
  })
});

describe('RunDown component', function() {
  it('displays up and down buttons and a text field', function() {
    let sandbox = sinon.createSandbox()

    // let mock = sandbox.stub(App.prototype, 'handleSet').returns(null);
    let wrapper = shallow(<RunDown />)

    expect(wrapper.find('div#timeDisplay')).to.have.lengthOf(1)
    expect(wrapper.find('div#timeDisplay').text()).to.equal('0')

    expect(wrapper.find('Button#incrementTime')).to.have.lengthOf(1)
    expect(wrapper.find('Button#decrementTime')).to.have.lengthOf(1)

    sandbox.restore();

  })
  it('when up button is pressed, handleSet method is called', function() {
    let spy = sinon.spy()
    let wrapper = shallow(<RunDown  handleSet={spy} />)

    wrapper.find('Button#incrementTime').simulate('click')
    expect(spy.called).to.be.true
  })
  it('when down button is pressed, handleSet method is called', function() {
    let spy = sinon.spy()
    let wrapper = shallow(<RunDown  handleSet={spy} />)

    wrapper.find('Button#incrementTime').simulate('click')
    expect(spy.called).to.be.true
  })
  it('display shows zero initially, inc increases, dec decreases. both by 30', function() {
    let wrapper = mount(<App />)
    let x = 0

    for(let i=0; i<3; i++){
      expect(wrapper.find('div#timeDisplay').text()).to.equal(`${x}`)
      wrapper.find('Button#incrementTime').simulate('click')
      x+=(30 * _.MINUTES);
    }

    x -= (30 * _.MINUTES);
    wrapper.find('Button#decrementTime').simulate('click')

    for(let i=0; i<3; i++){
      expect(wrapper.find('div#timeDisplay').text()).to.equal(`${x}`)
      wrapper.find('Button#decrementTime').simulate('click')
      x-=(30 * _.MINUTES);
    }
  })
  it('check that tick function gets called after render', function() {
    let spy = sinon.spy(RunDown.prototype, 'runTimer')
    let wrapper = shallow(<RunDown />)

    expect(spy.called).to.be.true

  })
  describe('timeDisplay function', function() {
    it('returns array of size 2', function() {
      let wrapper = shallow(<RunDown />)
      let result = wrapper.instance().getDisplayTime(5)
      expect(result).to.be.an('array').and.to.have.lengthOf(2)
    })
    it('given amounts of seconds, returns required display array of [hours, minutes]', function() {
      let functionUT = shallow(<RunDown />).instance().getDisplayTime
      let result = functionUT(500)
      expect(result[0]).to.equal(0)
      expect(result[1]).to.equal(8)

      result = functionUT(65000)
      expect(result[0]).to.equal(18)
      expect(result[1]).to.equal(3)

      result = functionUT(0)
      expect(result[0]).to.equal(0)
      expect(result[1]).to.equal(0)
    })
  })

})
