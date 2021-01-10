import {Route, Switch} from "react-router";
import Home from "./Home";
import Category from "./Category";
import {BrowserRouter} from "react-router-dom";
import {useContext} from "react";
import {StateContext} from "./App";


function Router() {

    const state = useContext(StateContext)[0]

    return(

        <BrowserRouter>
            <Switch>

                {state.categories.map(c => <Route path={`/${c.name.toLowerCase()}`}><Category name={c.name} /></Route>)}
                <Route exact path={"/"}><Home /></Route>

            </Switch>
        </BrowserRouter>

    )
}

export default Router