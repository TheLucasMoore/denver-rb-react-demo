import React from 'react';
import { IndexRoute, Route, browserHistory, Redirect } from 'react-router';
import { RelayRouter } from 'react-router-relay';
import AppLayout from '../components/AppLayout';
import HomePage from '../components/HomePage';
import Console from '../components/Console';

function renderLoading() {
    return (
        <div>
            LOADING!
        </div>
    );
}

function renderFailure(err) {
    return (
        <div>
            FAILURE!
            {err}
        </div>
    );
}

// Define the routes here
export default
<RelayRouter history={browserHistory}>
    <Route path="/graphql" component={Console} />
    <Route path="/" component={AppLayout} renderLoading={renderLoading} renderFailure={renderFailure}>
        <IndexRoute component={HomePage} />
    </Route>
</RelayRouter>;
