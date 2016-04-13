import React from 'react';
import Relay from 'react-relay';
import Post from './post';
import {Grid, Row } from 'react-bootstrap';

class Posts extends React.Component {
  renderPosts() {
    this.props.viewer.posts.edges.map(edge => {
      <Post key={edge.node.id} post={edge.node}/>
    });
  }
  render() {
    let { viewer } = this.props;
    return (
      <span>
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
  fragment: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        posts {
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