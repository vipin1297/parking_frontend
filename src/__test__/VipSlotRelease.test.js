import React from 'react';
import { shallow} from 'enzyme';
import VipSlotRelease from '../components/VipSlotRelease/VipSlotRelease';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<VipSlotRelease/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h4')).toHaveLength(1);
    });

    it('should render student id field', ()=> {
        expect(wrapper.find('#fromDate')).toHaveLength(1);
    });

    it('should render password field', ()=> {
        expect(wrapper.find('#toDate')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#btn3')).toHaveLength(1);
    });
    it('should render button field', ()=> {
        expect(wrapper.find('#btn4')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().releaseData.fromDate).toEqual('');
        });
      });
      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
              expect(wrapper.state().releaseData.toDate).toEqual('');
          });
      });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const fromDate = wrapper.find('#fromDate');
          fromDate.simulate('change', { target: { name:'mobileNo',value: '08-02-2019' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().releaseData.fromDate).toEqual('08-02-2019');
        })
      });
    
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const toDate = wrapper.find('#toDate');
          toDate.simulate('change', { target: {name:'toDate', value: '09-02-2019' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().releaseData.toDate).toEqual('09-02-2019');
        })
      });

      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#mobileNo').simulate('change', { target: {name:'fromDate', value: '08-02-2019' } });
          wrapper.find('#password').simulate('change', { target: { name:'toDate',value: '09-02-2019' } });
    
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn3');
          submit.simulate('click', fakeEvent);
        });
    
        it('should have excepted userName', () => {
          expect(wrapper.state().releaseData.fromDate).toEqual('08-02-2019');
        });
    
        it('should have excepted Password', () => {
          expect(wrapper.state().releaseData.toDate).toEqual('09-02-2019');
        });
      });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<VipSlotRelease />);
          const spy = jest.spyOn(comp.instance(), 'handleReleaseSlot');
          comp.instance().forceUpdate();
          comp.find('#btn3').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<VipSlotRelease />);
          const spy = jest.spyOn(comp.instance(), 'handleLogout');
          comp.instance().forceUpdate();
          comp.find('#btn3').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
     
});