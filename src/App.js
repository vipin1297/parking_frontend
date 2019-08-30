import React,{Component} from 'react';

import './App.css';
import {HashRouter,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Registration from './components/Registration/Registration';
import VipSlotRelease from './components/VipSlotRelease/VipSlotRelease';
import UserSlotBooking from './components/UserSlotBooking/UserSlotBooking';


class App extends Component {
  render(){
    return (
      <div className="App">
     <HashRouter>
       <Header/>
       <Route path="/login" component={Login}/>
       <Route path="/sidebar" component={Sidebar}/>
       <Route path="/registration" component={Registration}/>
       <Route path="/vipSlotRelease" component={VipSlotRelease}/>
       <Route path="/userSlotBooking" component={UserSlotBooking}/>
     </HashRouter>

      </div>
    );

  }
 
}

export default App;
