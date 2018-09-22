import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import axios from 'axios';
import sinon from 'sinon'
import React from 'react'
import App from '../src/containers/App.js'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });


describe('app component ajax call',() => {
  it('should work',() => {
    let promise = Promise.resolve({data:{fuckers: 'fuckers'}});
    let mock = sinon.stub(axios, 'get').returns(promise)

    let screen = mount(<App />)

    return promise.then(() => {
        // console.log('in test ' + JSON.stringify(screen.state()))
        debugger
        // console.log(window.location.origin)
        expect(screen.state()).to.have.property('jsonTable')
    })
  })

  it('subComp should render but only 1 div', function() {
    let screen = shallow(<App />)

    expect(screen.find('SubComp')).to.have.lengthOf(1);
    expect(screen.find('div')).to.have.lengthOf(1);
  });

  it('subComp should render 2 divs when full mount used', function() {
    let screen = mount(<App />)

    expect(screen.find('SubComp')).to.have.lengthOf(1);
    expect(screen.find('div')).to.have.lengthOf(2);

  })

})
