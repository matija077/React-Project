import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './redux/store';

import ErrorBoundary from './components/error-boundary/errorBoundary';
import HomePage from './pages/home/home.page';
import {default as Summary} from './pages/summary/Rsummary.page';
import Header from './components/header/RHeader';

import GlobalStyles from './global.styles';

function RApp() {

    return(
        <ErrorBoundary>
            <React.StrictMode>
                <Provider store={store}>
                    <Router>
                        <React.Fragment>
                            <GlobalStyles />

                            <Header />

                            <Switch>
                                <Route exact path="/">
                                    <HomePage>
                                    </HomePage>
                                </Route>
                                <Route path="/summary">
                                    <Summary>
                                    </Summary>
                                </Route>
                            </Switch>
                        </React.Fragment>
                    </Router>
                </Provider>
            </React.StrictMode>
        </ErrorBoundary>
    );
}

export default RApp;
