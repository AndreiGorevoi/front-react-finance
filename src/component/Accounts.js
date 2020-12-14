import React,{Component} from 'react'
import axios from "axios";

class Accounts extends Component{

    constructor(props) {
        super(props);
        this.state= {
            accounts: []
        }
    }


    componentDidMount() {
        this.refreshAccount();
    }

    refreshAccount(){
        axios.get("http://localhost:8081/account/all").then(res=>{
            console.log(res);
            this.setState({accounts: res.data});
            console.log(this.state.accounts);
        })
    }

    render() {
        return(
            <div>
                {this.state.accounts.map(
                    account=>
                        <div>
                            <p>{account.name}</p>
                            <p>{account.balance}</p>
                            <button className="btn btn-success">Choose the account</button>
                        </div>
                )
                }
            </div>

        )
    }
}
export default Accounts;