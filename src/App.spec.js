import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import LanguageBar from './LanguageBar';
import Cards from './Cards';
import { hasProp } from './testHelpers';

describe("App renders", () => {
    it("has a language bar", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.contains(<LanguageBar/>)).toEqual(true);
    });

    it("has a Cards section", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.contains(<Cards/>)).toEqual(true);
    });

    it("passes a callback to change the language to LanguageBar", () => {
        const wrapper = shallow(<App/>);
        const myBar = wrapper.find(LanguageBar).dive();
        expect(hasProp(myBar, 'toggleLanguage')).toEqual(true);
    });

});