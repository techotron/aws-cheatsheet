import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import ServiceSummary from './Common/ServiceSummary';
import ServiceChecklist from './Common/ServiceChecklist';
import ServicePrice from './Common/ServicePrice';
import { getCategoryData } from './Common/CategoryData';

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
                        data={getCategoryData(props.match.params.category, props.match.params.service)}
                    />
                }
            />
            <Route
                path='/checklist/:category/:service'
                render={(props) =>
                    <ServiceChecklist
                        props={props}
                        category={props.match.params.category}
                        service={props.match.params.service}
                        data={getCategoryData(props.match.params.category, props.match.params.service)}
                    />
                }
            />
            <Route
                path='/pricing/:category/:service'
                render={(props) =>
                    <ServicePrice
                        props={props}
                        category={props.match.params.category}
                        service={props.match.params.service}
                        data={getCategoryData(props.match.params.category, props.match.params.service)}
                    />
                }
            />
        </Switch>
    );
}

export default Router;
