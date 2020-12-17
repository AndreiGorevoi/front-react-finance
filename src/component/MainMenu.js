import React,{Component} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

class MainMenu extends Component{
    render() {
        return(
            <div className="root2">
               <Link to={'/accounts'}>My Accounts</Link>
                <br/>
               <Link to={'/account/add'}>Add new account</Link>
            </div>

        )
    }
}

export default MainMenu