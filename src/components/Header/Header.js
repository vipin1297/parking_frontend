import React,{Component} from 'react';
import './Header.css';
import ing from "./ing.jpg";


class Header extends Component{
    render(){
        return(
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <div class="header">
            <a href="#ing" className="logo"> HCL PARKING SLOT </a>
            <div class="header-right">
                <a class="active"><select>
                    <option value="en">ENGLISH</option>
                    <option value="sp">SPANISH</option>
                    </select></a>
                </div>
            </div>
            </div>
        )
    }
}
export default Header;