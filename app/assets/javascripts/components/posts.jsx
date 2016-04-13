import React from 'react';
import Relay from 'react-relay';
import Post from './post';
import {Grid, Row } from 'react-bootstrap';
import PostInput from './post_input';

let postsStyle = {
  'textAlign': 'center',
}
class Posts extends React.Component {
  renderPosts() {
    this.props.viewer.posts.edges.map(edge => {
      <Post key={edge.node.id} post={edge.node}/>
    });
  }
  render() {
    let { viewer } = this.props;
    return (
      <span style={this.postsStyle}>
        <PostInput viewer={viewer}/>
        <hr/>
        <Grid>
          <Row>
            <div> {this.renderPosts} </div>
          </Row>
        </Grid>
      </span>
    );
  }
}

export default Relay.createContainer(Posts, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        posts(first: 100) {
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