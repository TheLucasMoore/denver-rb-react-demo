import React from 'react';
import { IndexRoute, Route, browserHistory, Redirect } from 'react-router';
import { RelayRouter } from 'react-router-relay';
import AppLayout from '../components/app_layout';
import HomePage from '../components/home_page';
import Console from '../components/Console';
import Posts from '../components/posts';
import Post from '../components/post';
import ViewerQuery from '../queries/viewer';
import PostQuery from '../queries/post';


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
    <Route path="/" component={AppLayout} renderLoading={renderLoading} renderFailure={renderFailure} queries={ViewerQuery}>
      <IndexRoute component={HomePage} />
      <Route path="/posts">
        <IndexRoute component={Posts} queries={ViewerQuery} />
        <Route path="/:postId" component={Post} queries={PostQuery} />
      </Route>
    </Route>
</RelayRouter>;
