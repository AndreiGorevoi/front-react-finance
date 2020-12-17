import React, {Component} from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import MainMenu from "./MainMenu";
import Accounts from "./Accounts";
import AddAccount from "./AddAccount";
import SelectedAccount from "./SelectedAccount";
import AddTransaction from "./AddTransaction";
import Statistic from "./Statistic";


class MainComponent extends Component{
render() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainMenu}/>
                <Route path="/accounts" exact component={Accounts}/>
                <Route path="/account/add" exact component={AddAccount}/>
                <Route path="/account/:id" exact component={SelectedAccount}/>
                <Route path="/transaction/add:id" exact component={AddTransaction}/>
                <Route path="/statistic/:id" exact component={Statistic}/>
            </Switch>
        </BrowserRouter>
    )
}
}
export default MainComponent
