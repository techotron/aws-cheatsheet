import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';



function Router() {
    return (
        <div>
            <BrowserRouter>
                <Route exact
                    path='/'
                    render={() =>
                        <span>
                            <h1>This is the homepage</h1>
                        </span>
                    }
                />
                <Route exact
                    path='/info'
                    render={() =>
                        <span>
                            <h1>Welcome to AWS Cheatsheet</h1>
                            Example of dynamic env var:
                            <h3>API_URL: {window.env.REACT_APP_API_URL}</h3>
                        </span>
                    }
                />
            </BrowserRouter>
        </div>
    );
}

export default Router;
