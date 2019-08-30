import React,{Component} from 'react';
import  axios from 'axios';
import swal from 'sweetalert';
import config from '../../config.json';
import './UserRequest.css';

class  UserRequest extends Component{
    constructor(props){
        super(props);
        this.state={
            userRequest:{
                registrationId:localStorage.getItem("regId"),
                requestDate:''
            }
        }
    }
    handleChange = (event) => {
        const { userRequest } = this.state;  
        userRequest[event.target.name] = event.target.value;
        this.setState({ userRequest });
    }
    handleRequestSlot=(e)=>{
        e.preventDefault();
        const { userRequest } = this.state;
            axios.post(config.url+'requestSlot/',userRequest).then((response)=>{
            console.log(response.data);
            swal(response.data.message);
        }).catch((error)=>{ 
            console.log(error);        
        });
    }
    handleLogout=()=>{
        this.props.history.push("/login");
    }
    render(){
        return(
            <div>
                <button id="btn7"  className="btn btn-outline-primary  btn7" onClick={this.handleLogout}>Logout</button>
                <h4>USER REQUEST SLOT</h4>
 <div className="form1">
                <div className="container">
                    
                     <form >
                        <div className="row">
                            <div className="col-25">
                             <label >FROM DATE:</label>
                            </div>
                            <div className="col-75 ">
                                <input type="date" id="requestDate" name="requestDate" placeholder="plese enter the request Date..." onChange={this.handleChange}/>
                            </div>
                         </div>
                       
                    <div className="row">
                        <button className="btn btn-outline-primary btn3" id="btn3" onClick={this.handleRequestSlot}>Request</button>
                     </div>
                </form>
            </div>
            </div>
            
            </div>
        )
    }
}
export default UserRequest;
