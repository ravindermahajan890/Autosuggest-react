import React from 'react';
import { shallow } from 'enzyme';
import Autosuggest from './Autosuggest';

describe("Autosuggest", () => {
    
    it("should render autosuggest component", () => {
        const wrapper = shallow(<Autosuggest />)
    });
        
    it("should render initial layout", () => {
        const autosuggest = shallow(<Autosuggest/>);
        expect(autosuggest.getElements()).toMatchSnapshot();
    });
        
    it("should simulate onchange event", () => {
        const mockPropsFn = jest.fn();
        const autosuggest = shallow(<Autosuggest onHandleChange = {mockPropsFn} selectedSuggestion='divyanshu'/>);
        const input = autosuggest.find('input');
        expect(autosuggest.props().value).toEqual('divyanshu');
        input.simulate('change', { target: { value: 'Ekta' } });
        expect(mockPropsFn).toHaveBeenCalled();
        expect(mockPropsFn).toHaveBeenCalledWith('Ekta');
    });
    
    it("should simulate onFocus event", () => {
        const mockPropsFn = jest.fn();
        const autosuggest = shallow(<Autosuggest onFocus = {mockPropsFn}/>);
        const input = autosuggest.find('input');
        input.simulate('focus', { target: { value: 'Ekta' } });
        expect(mockPropsFn).toHaveBeenCalled();
    });

    it("should simulate onKeyup event", () => {
        const mockPropsFn = jest.fn();
        const autosuggest = shallow(<Autosuggest onKeyDown = {mockPropsFn}/>);
        const input = autosuggest.find('input');
        input.simulate('keydown', { target: { value: 'Ekta' } });
        expect(mockPropsFn).toHaveBeenCalled();
    });

});



