import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import App from './App';


function Router() {
    return (
        <div>
            <BrowserRouter>
                <Route exact
                    path='/'
                    render={() =>
                        <Container style={{ fontFamily: "sans-serif" }}>
                            <App />
                        </Container>
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
                    render={() =>
                        <span>
                            <h1>This is where some information about AWS services will go</h1>
                        </span>
                    }
                />
            </BrowserRouter>
        </div>
    );
}

export default Router;
