import React, { Component } from 'react';
import './UserSlotBooking.css'
import axios from 'axios';
import config from '../../config.json';
import swal from 'sweetalert';



class userSlotBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listAvailableSeats: []
        }
    }

    componentDidMount() {
     
        this.getData().then(response => {
            console.log(response.data)
          this.setState({ listAvailableSeats: response.data });
        });
    
    
      }
    getData = () => {
       
       
        return new Promise((resolve, reject) => {
          axios.get(config.url+'showAvailableSlots').then((response)=> {
            resolve(response);
          console.log(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }
      handleLogout=()=>{
        this.props.history.push("/login");
    }

    handleSelectSlot=(item)=>{
        localStorage.setItem("availableSlotId",item.availableSlotId);
        console.log(item.availableSlotId);

    }
    handleUserRequest=()=>{
        this.props.history.push('/userRequest');
    }

    handleSlotBooking=(e)=>{
        e.preventDefault();
        let data1={
            regId:localStorage.getItem("regId"),
            availableSlotId:localStorage.getItem("availableSlotId")
        }
            axios.post(config.url+'bookSlot/',data1).then((response)=>{
            console.log(response.data);
            swal(response.data.message);
        }).catch((error)=>{ 
            console.log(error);        
        });
    }
    

    render() {

        return (
            <div>
                <button   id="btn5" className="btn btn-outline-primary  btn5 " onClick={this.handleLogout}>Logout</button>
                <button   id="btn6" className="btn btn-outline-primary  btn6 " onClick={this.handleUserRequest}>userRequest</button>
                <div>

                    <div>
                        <h1 align="left" className="user-title" >List Of Available slots</h1>
                    </div>

                    <div>
                        <h1 align="center" className="slot-title">Please select a Slot</h1>
                    </div>
                    <div>

                    </div>
                    {this.state.listAvailableSeats.map((item,i)=>{
                        return(
                            <div className="container-slot">
                            <div class="cabin fuselage" key={i}>
                        <div class="row--1">
                            <div class="seats" type="A">
                                <div class="seat">
                                    <input type="checkbox" id={item.availableSlotId}  onClick={()=>this.handleSelectSlot(item)}/>
                                    <label for={item.availableSlotId}>{item.status}</label>
                                </div>
                              
                            </div>
                        </div>
                        </div>
                        </div>
                        


                        )
                    })}
                      
                    
                      
                    <div>
                   

                    </div>
                    
                </div>
                <button type="button" id="btn6" className="btn btn-info book-btn" onClick={this.handleSlotBooking}>Book</button>
            </div>
        )
    }
}
export default userSlotBooking;