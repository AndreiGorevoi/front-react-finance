import React,{Component} from 'react'
import axios from "axios";
import './../style/SelectedAccount.css'

class SelectedAccount extends Component{

    constructor(props) {
        super(props);
        this.state ={
            id : this.props.match.params.id,
            account : {},
            balance : '',
            group: [],
        }
    }
    componentDidMount() {
        this.refreshMyAccount();
    }

    refreshMyAccount(){
        axios.get("http://localhost:8081/account/"+this.state.id).then(res =>{
            this.setState({account : res.data});
            console.log(this.state.account);
        })
        axios.get("http://localhost:8081/transaction/balance?accountId="+this.state.id).then(res=>{
            this.setState({balance: res.data})
        })
    }

    render() {
        return(
            <div>
                <div className={"root2"}>
                    <h3 className={'title'} >{this.state.account.name}</h3>
                    <p className={'text'}>Balance: {this.state.balance}</p>
                    <div>
                        <button className="btn btn-success" onClick={()=> window.location.href="http://localhost:3000/transaction/add"+this.state.account.id}> Add transaction</button>
                        <button style={{marginLeft:'10px'}} onClick={()=> window.location.href="/statistic/"+this.state.account.id} className="btn btn-success"> Statistics</button>
                    </div>
                </div>


            </div>

        )
    }
}

export default SelectedAccount;