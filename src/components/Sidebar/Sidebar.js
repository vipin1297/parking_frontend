import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';


class Sidebar extends Component{
    render(){
        return(
            <div>
                <div class="sidebar">
                <Link to='/login'>LOGIN</Link>

            </div>

            </div>
        )
    }
}
export default Sidebar;