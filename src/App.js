import React,{Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import {HashRouter,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import VipSlotRelease from './components/VipSlotRelease/VipSlotRelease';
import UserSlotBooking from './components/UserSlotBooking/UserSlotBooking';
import UserRequest from './components/UserRequest/UserRequest';


class App extends Component {
  render(){
    return (
      <div className="App">
     <HashRouter>
       <Header/>
       <Route path="/" component={Registration} exact/>
       <Route path="/registration" component={Registration}/>
       <Route path="/login" component={Login}/>
       <Route path="/vipSlotRelease" component={VipSlotRelease}/>
       <Route path="/userSlotBooking" component={UserSlotBooking}/>
       <Route path="/userRequest" component={UserRequest}/>
     </HashRouter>

      </div>
    );

  }
 
}

export default App;
