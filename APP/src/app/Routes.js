import React from "react";
import {Route, Switch, HashRouter} from "react-router-dom";
import {App} from "./App";
import Home from "./core/components/Home";
import About from "./core/components/About";
import StateEdit from "./statesList/container/StateEdit";
import StateView from "./statesList/container/StateView";
import NotFound from "./core/components/NotFound";
import Contact from "./core/components/Contact";
import StatesList from "./statesList/container/StatesList";
 
export default function Routes(props) {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route exact path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/states" exact component={StatesList} />
                    <Route path="/states/Edit" exact component={StateEdit} />
                    <Route path="/states/Edit/:id" component={StateEdit} />
                    <Route path="/states/view/:id" component={StateView} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </App>
        </HashRouter>
    )
}
