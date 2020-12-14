import React,{Component} from 'react'
import axios from "axios";
import './../style/AddNewAccount.css'
import {Link} from "react-router-dom";

class AddAccount extends Component{
    render() {
        return(
            <div className='root'>
                <h2>New account</h2>
                <input className="form-control" id='name' type='text' placeholder='Name of account'/><br/>
                <input className="form-control"  id='balance' type='number'defaultValue='0' placeholder='balance'/><br/>
                <button className="btn btn-success" onClick={addNewAccount}>Add new account</button>
                <br/>
                <Link to={'/'}>Back to main</Link>
            </div>

        )
    };

}

function addNewAccount(){
    let account ={
        name : document.getElementById('name').value,
        balance : document.getElementById('balance').value
    };
    //TODO: name of account in alert
    axios.post("http://localhost:8081/account", account).then(response =>{
        alert("Account has been added!");
        window.location.href="http://localhost:3000/";
    });
}
export default AddAccount