import React from 'react';
import { shallow } from 'enzyme';
import Suggestions from './Suggestions';

describe("Suggestions", ()=>{
    it("should render suggestions component", ()=>{
        const wrapper = shallow(<Suggestions/>);

    });

    it("should render a  list", ()=>{
        const options = [{label: 'Afghanistan', value: 'AF'}];
        const suggestions = shallow(<Suggestions suggestionList = {options}/>);
        const list = suggestions.find('li');
        expect(list.length).toEqual(1);
    });
    it("should render a  list of length 0", ()=>{
        const options = [];
        const suggestions = shallow(<Suggestions suggestionList = {options}/>);
        const list = suggestions.find('li');
        expect(list.length).toEqual(0);
    });
    it("simulate click event",()=>{
        const options = [{label: 'Afghanistan', value: 'AF'}];
        const mockPropsFn = jest.fn();
        const suggestions = shallow(<Suggestions suggestionList = {options} onSuggestionClick={mockPropsFn}/>);
        suggestions.find('li').simulate('click', options[0]);
        expect(mockPropsFn).toHaveBeenCalled();
        expect(mockPropsFn).toHaveBeenCalledWith(options[0]);
    });
    it("selected list item should have a classname", ()=>{
        const options = [{label: 'Afghanistan', value: 'AF'}];
        const suggestions = shallow(<Suggestions selectedSuggestionKey='AF' suggestionList={options}/>)
        expect(suggestions.find('li').hasClass('selected')).toEqual(true);      
    });
    it("selected list item should have a classname", ()=>{
        const options = [{label: 'Afghanistan', value: 'AF'}];
        const suggestions = shallow(<Suggestions cursor={0} suggestionList={options}/>)
        expect(suggestions.find('li').hasClass('active')).toEqual(true);      
    })
})