import React from 'react';
import { shallow} from 'enzyme';

import Registration from '../components/Registration/Registration';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Registeration/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h2')).toHaveLength(1);
    });

    it('should render student id field', ()=> {
        expect(wrapper.find('#userName')).toHaveLength(1);
    });
    
    it('should render password field', ()=> {
        expect(wrapper.find('#password')).toHaveLength(1);
    });

    it('should render student id field', ()=> {
        expect(wrapper.find('#mobileNumber')).toHaveLength(1);
    });

    
    it('should render student id field', ()=> {
        expect(wrapper.find('#overAllExperience')).toHaveLength(1);
    });
    it('should render student id field', ()=> {
        expect(wrapper.find('#hclExperience')).toHaveLength(1);
    });


    it('should render button field', ()=> {
        expect(wrapper.find('#btn2')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().registerData.userName).toEqual('');
        });
      });
      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
              expect(wrapper.state().registerData.password).toEqual('');
          });
      });
      describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().registerData.mobileNumber).toEqual('');
        });
    });
    describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().registerData.overAllExperience).toEqual('');
        });
    });
    describe('when onChange event is not triggered on password field',()=>{
        it('should have empty state',()=>{
            expect(wrapper.state().registerData.hclExperience).toEqual('');
        });
    });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const userName = wrapper.find('#userName');
          userName.simulate('change', { target: { name:'userName',value: 'divya' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().registerData.userName).toEqual('divya');
        })
      });
    
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const password = wrapper.find('#password');
          password.simulate('change', { target: {name:'password', value: 'divya@123' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().registerData.password).toEqual('divya@123');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const mobileNumber = wrapper.find('#mobileNumber');
          mobileNumber.simulate('change', { target: {name:'mobileNumber', value: '1234567899' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().registerData.mobileNumber).toEqual('divya@123');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const overAllExperience = wrapper.find('#overAllExperience');
          overAllExperience.simulate('change', { target: {name:'overAllExperience', value: '12' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().registerData.overAllExperience).toEqual('12');
        })
      });
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const hclExperience = wrapper.find('#hclExperience');
          hclExperience.simulate('change', { target: {name:'hclExperience', value: '5' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().registerData.hclExperience).toEqual('5');
        })
      });
      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#userName').simulate('change', { target: {name:'userName', value: 'divya' } });
          wrapper.find('#password').simulate('change', { target: { name:'password',value: 'divya@123' } });
          wrapper.find('#mobileNumber').simulate('change', { target: { name:'mobileNumber',value: '1234567899' } });
          wrapper.find('#overAllExperience').simulate('change', { target: { name:'overAllExperience',value: '12' } });          
          wrapper.find('#hclExperience').simulate('change', { target: { name:'hclExperience',value: '5' } });  

          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn2');
          submit.simulate('click', fakeEvent);
        });
    
        it('should have excepted userName', () => {
          expect(wrapper.state().registerData.userName).toEqual('divya');
        });
    
        it('should have excepted Password', () => {
          expect(wrapper.state().registerData.password).toEqual('divya@123');
        });
        it('should have excepted Password', () => {
            expect(wrapper.state().registerData.mobileNumber).toEqual('1234567899');
          });
          it('should have excepted Password', () => {
            expect(wrapper.state().registerData.overAllExperience).toEqual('12');
          });
          it('should have excepted Password', () => {
            expect(wrapper.state().registerData.hclExperience).toEqual('5');
          });
      });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<Registration />);
          const spy = jest.spyOn(comp.instance(), 'handleRegistration');
          comp.instance().forceUpdate();
          comp.find('#btn2').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
});