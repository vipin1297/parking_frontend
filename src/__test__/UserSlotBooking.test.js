import React from 'react';
import { shallow} from 'enzyme';
import UserSlotBooking from '../components/UserSlotBooking/UserSlotBooking';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<UserSlotBooking/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

  
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#btn5')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#btn6')).toHaveLength(1);
    });

  
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<UserSlotBooking />);
          const spy = jest.spyOn(comp.instance(), 'handleSlotBooking');
          comp.instance().forceUpdate();
          comp.find('#btn6').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<UserSlotBooking />);
          const spy = jest.spyOn(comp.instance(), 'handleLogout');
          comp.instance().forceUpdate();
          comp.find('#btn5').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
     
});