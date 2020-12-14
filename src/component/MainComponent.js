import React, {Component} from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import MainMenu from "./MainMenu";
import Accounts from "./Accounts";
import AddAccount from "./AddAccount";


class MainComponent extends Component{
render() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainMenu}/>
                <Route path="/accounts" exact component={Accounts}/>
                <Route path="/account/add" exact component={AddAccount}/>
            </Switch>
        </BrowserRouter>
    )
}
}
export default MainComponent
