import React from 'react';
import Relay from 'react-relay';
import {Grid, Row } from 'react-bootstrap';

import Post from './post';
import PostInput from './post_input';

let postsStyle = {
  'textAlign': 'center',
}

class Posts extends React.Component {
  renderPosts() {
   return this.props.viewer.posts.edges.map(edge => {
      return (<Post key={edge.node.id} post={edge.node}/>);
    });
  }
  render() {
    let { viewer } = this.props;
    return (
      <span style={this.postsStyle}>
        <h3> Create a New Post </h3>
        <PostInput viewer={viewer}/>
        <hr/>
        <Grid>
          <Row>
            <div> {this.renderPosts()} </div>
          </Row>
        </Grid>
      </span>
    );
  }
}

export default Relay.createContainer(Posts, {
  initialVariables: {
    limit: 100
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        posts(first: $limit) {
          edges {
            node {
              id
              ${Post.getFragment('post')}
            }
          }
        }
      }
    `
  }
})
