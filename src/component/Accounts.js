import React,{Component} from 'react'
import axios from "axios";

class Accounts extends Component{

    constructor(props) {
        super(props);
        this.state= {
            accounts: [{
                id: '',
                name: '',
            }]
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
            <div className='card-deck'>
                {this.state.accounts.map(
                    account=>

                        <div className="card; card border-success mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{account.name}</h5>
                                    <a href={'http://localhost:3000/account/'+account.id} className="btn btn-primary">Select this account</a>
                                </div>
                        </div>

                )
                }
            </div>

        )
    }
}
export default Accounts;