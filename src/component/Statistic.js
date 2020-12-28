import React,{Component} from 'react'
import axios from "axios";
import './../style/Statistic.css'
import $ from 'jquery';

class Statistic extends Component{
    constructor(props) {
        super(props);
        this.state={
            accountId: this.props.match.params.id,
            statistic :[]
        }
        this.refreshStatistic=this.refreshStatistic.bind(this);
    }

    componentDidMount() {
        this.refreshStatistic();
    }

    refreshStatistic(){
        axios.get("http://localhost:8081/transaction/statistic/"+this.state.accountId).then(res=>{
            this.setState({statistic : res.data})
            console.log(this.state.statistic)
        })
    }

    render() {
        return(
            <div id={'root2'}>
                <table className={'greenTable'}>
                    <tr>
                        <th>Group name:</th>
                        <th>Cash spent:</th>
                        <th>Percent: </th>
                    </tr>
                {this.state.statistic.map(
                    statistic=>
                        <tr>
                            <td>{statistic.groupName}</td>
                            <td>{statistic.groupValue} BYN</td>
                            <td>{statistic.percent} %</td>
                        </tr>
                )}
                </table>
            </div>
        )
    }
}

export default Statistic;