import React,{Component} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

class MainMenu extends Component{
    render() {
        return(
            <div className="container-fluid">
               <Link to={'/accounts'}>My Accounts</Link>
                <br/>
               <Link to={'/account/add'}>Add new account</Link>
            </div>

        )
    }
}

export default MainMenu