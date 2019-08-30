import React,{Component} from 'react';
import './Registration.css';
import axios from 'axios';
import config from '../../config.json';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

class Registration extends Component{
    constructor(props){
        super(props);
        this.state={
            registerData:{
                userName:'',
                password:'',
                mobileNumber:'',
                overAllExperience:'',
                hclExperience:''
            }
        }
    }
    handleChange = (event) => {
        const { registerData } = this.state;  
        registerData[event.target.name] = event.target.value;
        this.setState({ registerData });
    }
    handleRegistration=(e)=>{
        e.preventDefault();
        const { registerData } = this.state;
            axios.post(config.url+'register/',registerData).then((response)=>{
            console.log(response.data);
            swal('Registration successful!')
            this.props.history.push('/login');
        }).catch((error)=>{ 
            console.log(error);        
        });
    }
    render(){
        return(
            <div>
                <h3>REGISTRATION FORM</h3>
                <div className="form1">
                <div className="container">
                     <form >
                        <div className="row">
                            <div className="col-25">
                             <label >USER NAME:</label>
                            </div>
                            <div className="col-75 ">
                                <input type="text" id="userName" name="userName" placeholder="plese enter the user name..." onChange={this.handleChange}/>
                            </div>
                         </div>
                       <div className="row">
                            <div className="col-25">
                                <label >PASSWORD:</label>
                             </div>
                            <div className="col-75">
                                <input type="password" id="password" name="password" placeholder="please enter the password.." onChange={this.handleChange}/>
                            </div>
                     </div>
                     <div className="row">
                            <div className="col-25">
                                <label>MOBILE NUMBER:</label>
                             </div>
                            <div className="col-75">
                                <input type="number" id="mobileNumber" name="mobileNumber" placeholder="please enter the mobile number.." onChange={this.handleChange}/>
                            </div>
                     </div>
                     <div className="row">
                            <div className="col-25">
                                <label>OVER ALL EXPERIENCE:</label>
                             </div>
                            <div className="col-75">
                                <input type="number" id="overAllExperience" name="overAllExperience" placeholder="please enter the over all exprience.." onChange={this.handleChange}/>
                            </div>
                     </div>
                     <div className="row">
                            <div className="col-25">
                                <label>HCL EXPERIENCE:</label>
                             </div>
                            <div className="col-75">
                                <input type="number" id="hclExperience" name="hclExperience" placeholder="please enter the hcl exprience.." onChange={this.handleChange}/>
                            </div>
                     </div>
                     
                     
                    <div className="row">
                        <button className="btn btn-outline-primary btn3" id="btn2" onClick={this.handleRegistration}>Register</button>
                     </div>
                     <Link className="nav-item nav-link login-tag-title" to='/login'>AllReady Registered? login</Link>
                </form>
            </div>
            </div>
        </div>
        )
    }
}
export default Registration;