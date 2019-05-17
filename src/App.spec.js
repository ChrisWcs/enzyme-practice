import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import LanguageBar from './LanguageBar';
import Cards from './Cards';

describe("App renders", () => {
    it("has a language bar", () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.contains(<LanguageBar/>)).toEqual(true);
    });

    it("has a Cards section", () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.contains(<Cards/>)).toEqual(true);
    })
});