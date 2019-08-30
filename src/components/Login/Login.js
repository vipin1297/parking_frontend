import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.json';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                mobileNo: '',
                password: ''
            }
        }
    }

    handleChange = (event) => {
        const { loginData } = this.state;  
        loginData[event.target.name] = event.target.value;
        this.setState({ loginData });
    }

     handleSubmit = (event) => {
        event.preventDefault();
        const { loginData } = this.state;
        console.log(loginData);
            axios.post(config.url+'login/',loginData).then((response)=>{
            console.log(response.data);
            localStorage.setItem("regId",response.data.regId);
            if(response.data.roleName =="E"){
               this.props.history.push('/userSlotBooking');
            }else {
                this.props.history.push('/vipSlotRelease')

            }


            
        }).catch((error)=>{ 
            console.log(error);        
        });
     
    }
    render() {
        return (
        
            <div >
                 <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">login</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input type="number" id="mobileNo" onChange={this.handleChange} name="mobileNo" className="form-control" placeholder="enter the mobile number"required autofocus>
            </input>    <label for="inputEmail">Mobile Number</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="inputPassword" onChange={this.handleChange} name="password"  className="form-control" placeholder="enter the password" required>
          </input>      <label for="inputPassword">Password</label>
              </div>
              <button  id="btn1" className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.handleSubmit}type="submit">Sign in</button>
                                 
             </form>
             </div>
                        <Link className="nav-item nav-link login-tag-title" to='/registration'>New User? Register</Link>
                    </div>
          </div>
        </div>
      </div>
   
 
           
        );
    }
}

export default Login;