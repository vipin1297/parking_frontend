import React,{Component} from 'react';
import one from './one.png';
import './Header.css';

class Header extends Component{


    render(){
        
        return(
            <div>
                <div className="main">
                    <ul>
                        <li><img src={one} width="100px" height="100px"/></li>
                        <li className="titlespace"><h2 className="title">HCL PARKING LOT</h2></li>
                        <li className="selectDropDown"> <select  onChange={this.handleSelect}>
                        <option value="en">ENGLISH</option>
                        <option value="sp">SPANISH</option>
                    </select></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;
