import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
import ServiceSummary from './Common/ServiceSummary';

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
                path='/summary/:category/:service'
                render={(props) =>
                    <ServiceSummary
                        props={props}
                        category={props.match.params.category}
                        service={props.match.params.service}
                    />
                }
            />
        </Switch>
    );
}

export default Router;
