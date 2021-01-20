import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from './Pages/Homepage'
import ServiceSummary from './Templates/ServiceSummary'
import ServiceChecklist from './Templates/ServiceChecklist'
import ServicePrice from './Templates/ServicePrice'
import { getCategoryData } from './Templates/CategoryData'
import Status from './Pages/Status'

function Router() {
    return (
        <Switch>
            <Route
                exact
                path='/'
                render={() =>
                    <Route exact path='/' render={() => <Homepage />} />}
            />
            <Route
                exact
                path='/info'
                render={() =>
                    <span>
                        <h1>Welcome to SRE Resources info page</h1>
            Example of dynamic env var:
                        <h3>API_URL: {window.env.REACT_APP_API_URL}</h3>
                    </span>}
            />
            <Route
                path='/revision/summary/:category/:subCategory'
                render={(props) =>
                    <ServiceSummary
                        props={props}
                        category={props.match.params.category}
                        subCategory={props.match.params.subCategory}
                    />}
            />
            <Route
                path='/revision/checklist/:category/:subCategory'
                render={(props) =>
                    <ServiceChecklist
                        props={props}
                        category={props.match.params.category}
                        subCategory={props.match.params.subCategory}
                        data={getCategoryData(props.match.params.category, props.match.params.subCategory)}
                    />}
            />
            <Route
                path='/revision/pricing/:category/:subCategory'
                render={(props) =>
                    <ServicePrice
                        props={props}
                        category={props.match.params.category}
                        subCategory={props.match.params.subCategory}
                        data={getCategoryData(props.match.params.category, props.match.params.subCategory)}
                    />}
            />
            <Route
                exact
                path='/status'
                render={() =>
                    <span>
                        <Status />
                    </span>}
            />
        </Switch>
    )
}

export default Router
