import React,{Component} from 'react'
import axios from "axios";
import $ from 'jquery';

class AddTransaction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountId: this.props.match.params.id,
            groups : [],
            isActiveAddGroup :false
        }
        this.addNewGroup = this.addNewGroup.bind(this);
        this.refreshGroups= this.refreshGroups.bind(this);
        this.addNewTransaction= this.addNewTransaction.bind(this);
    }
    componentDidMount() {
       this.refreshGroups();
    }
    addNewGroup(){
        axios.post("http://localhost:8081/group/"+this.state.accountId,{name:document.getElementById("groupName").value}).then(resp=>{
            this.refreshGroups();
        })
        alert("Group has been added =)");
        $("#groupName").val('');
    }

    addNewTransaction(){
        let groupId;
        this.state.groups.map(
            group=>
            {if(group.name===$('#transaction-group').val()){
               groupId=group.id
            }
            }
        )
        let transaction ={
            description : $('#description-area').val(),
            value : $('#checkbox-arrival').prop("checked") ? $('#value-money').val() : -$('#value-money').val(),
        }
        axios.post("http://localhost:8081/transaction/"+groupId,transaction).then(resp=>{
            console.log(resp);
        })
        $("#description-area").val('');
        $("#value-money").val('');
        alert("Transaction has been added")
    }

    refreshGroups(){
        axios.get("http://localhost:8081/group/"+this.state.accountId).then(resp=>{
            this.setState({groups: resp.data});
        })
    }

    render() {
        return(
            <div className={'root2'}>
                <h1>Add transaction</h1>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Group of transaction:</label>
                    </div>
                    <select id='transaction-group' className="custom-select">
                        {this.state.groups.map(
                            group=>
                                <option>{group.name}</option>
                        )}
                    </select>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Br</span>
                    </div>
                    <input id="value-money" type="number" className="form-control" min='0' aria-label="Amount (to the nearest dollar)"/>
                        <div className="input-group-append">
                            <span className="input-group-text">Arrival</span>
                        </div>
                    <div className="input-group-text">
                        <input id="checkbox-arrival" type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Description</span>
                    </div>
                    <textarea id='description-area' className="form-control" aria-label="With textarea"></textarea>
                </div>
                <br/>
                <button onClick={this.addNewTransaction} className="btn btn-success">Add transaction</button>
                <button onClick={()=>window.location.href="/account/"+this.state.accountId} className="btn btn-success">Return to account</button>
                <blockquote></blockquote>

                <br/>
                {this.state.isActiveAddGroup ?(
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Name:</span>
                        </div>
                        <input className="form-control" id='groupName'/>
                        <button className="btn btn-success"  onClick={this.addNewGroup}>Add</button>
                    </div>
                ):(
                    <div></div>
                )
                }
                <div>
                    <button className="btn btn-success" onClick={()=>this.setState({isActiveAddGroup: !this.state.isActiveAddGroup})}>Add group/Close</button>
                </div>


            </div>
        )
    }
}
export default AddTransaction;

