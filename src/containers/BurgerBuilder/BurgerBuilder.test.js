import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder} from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}}/>);
    });

    it('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });

    // it('should render three <NavigationItems /> elements if authenticated', () => {
    //     // wrapper = shallow(<NavigationItems isAuthenticated/>);
    //     wrapper.setProps({isAuthenticated: true});
    //     expect(wrapper.find(NavigationItem)).toHaveLength(3);
    // });

    // it('should an exact logout button', () => {
    //     wrapper.setProps({isAuthenticated: true});
    //     expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
    // });
});