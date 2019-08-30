import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                password: ''
            }
        }
    }

    handleChange = (event) => {
        const { formData } = this.state;  
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

     handleSubmit = (event) => {
        event.preventDefault();
        const { formData } = this.state;
        console.log(formData);
            axios.post('',formData).then((response)=>{
            console.log(response.data);
            if(response.data.regId=="1"){
                this.props.history.push('/');
            }else if(response.data.regId=="2"){
                this.props.history.push('/')

            }else{
                this.props.history.push('/')
            }

            
        }).catch((error)=>{ 
            console.log(error);        
        });
     
    }
    render() {
        return (
        
            <div >
                 <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">login</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="email" id="inputEmail" onChange={this.handleChange} name="userName" class="form-control" placeholder="enter thr user name"required autofocus>
            </input>    <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" onChange={this.handleChange} name="password"  class="form-control" placeholder="enter the password" required>
          </input>      <label for="inputPassword">Password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.handleSubmit}type="submit">Sign in</button>
                                 
             </form>
             </div>
                        <Link className="nav-item nav-link login-tag-title" to='/register'>New User? Register</Link>
                    </div>
          </div>
        </div>
      </div>
   
 
           
        );
    }
}

export default Login;