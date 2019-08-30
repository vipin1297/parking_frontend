import React,{Component} from 'react';
import axios from 'axios';
import config from '../../config.json';
import swal from 'sweetalert';
import './VipSlotRelease.css';

class VipSlotRelease extends Component{
    constructor(props){
        super(props);
        this.state={
            releaseData:{
                registrationId:localStorage.getItem("regId"),
                fromDate:'',
                toDate:''
            }
        }
    }
    handleChange = (event) => {
        const { releaseData } = this.state;  
        releaseData[event.target.name] = event.target.value;
        this.setState({ releaseData });
    }
    handleReleaseSlot=(e)=>{
        e.preventDefault();
        const { releaseData } = this.state;
            axios.post(config.url+'release/',releaseData).then((response)=>{
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
                <button id="btn4"  className="btn btn-outline-primary  btn4 " onClick={this.handleLogout}>Logout</button>
                <h4>VIP SLOT RELEASE DATE</h4>
 <div className="form1">
                <div className="container">
                    
                     <form >
                        <div className="row">
                            <div className="col-25">
                             <label >FROM DATE:</label>
                            </div>
                            <div className="col-75 ">
                                <input type="date" id="fromDate" name="fromDate" placeholder="plese enter the from Date..." onChange={this.handleChange}/>
                            </div>
                         </div>
                         <div className="row">
                            <div className="col-25">
                             <label >TO DATE:</label>
                            </div>
                            <div className="col-75 ">
                                <input type="date" id="toDate" name="toDate" placeholder="plese enter the to Date..." onChange={this.handleChange}/>
                            </div>
                         </div>
                       
                    <div className="row">
                        <button className="btn btn-outline-primary btn3" id="btn3" onClick={this.handleReleaseSlot}>Release</button>
                     </div>
                </form>
            </div>
            </div>
            
            </div>
        )
    }
}
export default VipSlotRelease;