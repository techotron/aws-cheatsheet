import React from "react";
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';

function Router() {
    return (
        <Switch>
            <Route exact
                path='/'
                render={() =>
                    <Route exact path="/" render={() => <Homepage />}/>
                }
            />
            <Route exact
                path='/info'
                render={() =>
                    <span>
                        <h1>Welcome to AWS Cheatsheet info page</h1>
                        Example of dynamic env var:
                        <h3>API_URL: {window.env.REACT_APP_API_URL}</h3>
                    </span>
                }
            />
            <Route
                path='/services/:categoryId/:id'
                render={(props) =>
                    <span>
                        <h1>This is where some information about AWS services will go.</h1>
                        <h3>Category ID: </h3>{props.match.params.categoryId}
                        <h3>Sub Category ID: </h3>{props.match.params.id}
                    </span>
                }
            />
        </Switch>
    );
}

export default Router;
