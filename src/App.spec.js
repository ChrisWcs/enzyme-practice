import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import LanguageBar from './LanguageBar';

describe("App renders", () => {
    it("has a language bar", () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.contains(<LanguageBar/>)).toEqual(true);
    });
});