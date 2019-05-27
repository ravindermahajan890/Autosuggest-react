import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should set state on handle change', ()=>{
    const options = {label: 'Afghanistan', value: 'AF'};
    const mockPropsFn = jest.fn();
    const app = shallow(<App/>);
    app.instance().filterOptions=mockPropsFn;
    app.instance().handleChange(options);
    expect(app.state().selectedSuggestion).toEqual(options);
    expect(app.state().showList).toEqual(true);
    expect(mockPropsFn).toHaveBeenCalled();
    expect(mockPropsFn).toHaveBeenCalledWith(options);
});

it('should set state on suggestion select', ()=>{
    const options = {label: 'Afghanistan', value: 'AF'};
    const mockPropsFn = jest.fn();
    const app = shallow(<App/>);
    app.instance().filterOptions=mockPropsFn;
    app.instance().onSuggestionSelect(options);
    expect(app.state().selectedSuggestion).toEqual(options.label);
    expect(app.state().showList).toEqual(false);
    expect(app.state().key).toEqual(options.value);
    expect(app.state().cursor).toEqual(0);
    expect(mockPropsFn).toHaveBeenCalled();
    expect(mockPropsFn).toHaveBeenCalledWith(options.label);
});

it('should set state on suggestion select', ()=>{
    const app = shallow(<App/>);
    app.instance().onInputFocus();
    expect(app.state().showList).toEqual(true);
});

it('should set state on suggestion select', ()=>{
    const options = [{label: 'Afghanistan', value: 'AF'}];
    const app = shallow(<App/>);
    app.instance().filterOptions('AFghan');
    expect(app.state().options).toEqual(options);
});

it('should set cursor state on down arrow', ()=>{
    const e = {keyCode:38};
    const app = shallow(<App/>);
    app.state().cursor=3;
    app.instance().navigateThroughKeys(e);
    expect(app.state().cursor).toEqual(2);
});

it('should set cursor state on up arrow', ()=>{
    const e = {keyCode:40};
    const app = shallow(<App/>);
    app.state().cursor=3;
    app.instance().navigateThroughKeys(e);
    expect(app.state().cursor).toEqual(4);
});

it('should set selected option in input', ()=>{
    const e = {keyCode:13};
    const app = shallow(<App/>);
    const mockPropsFn = jest.fn();
    app.instance().onSuggestionSelect=mockPropsFn;
    app.instance().navigateThroughKeys(e);
    expect(mockPropsFn).toHaveBeenCalled();
    
})