import React from 'react';
import Relay from 'react-relay';
import {Button, Col} from 'react-bootstrap';
import DeletePost from '../mutations/delete_post';
import PostInput from './post_input';

class Post extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      updating: false
    }
  }

  get onSuccess() {
    console.log('post deleted');
  }

  get onFailure() {
    return (transaction) => {
      const error = transaction.getError() || new Error('Mutation failed.');
      console.log(error);
    };
  }

  deletePost() {
    let post = this.props.post;
    let mutation = new DeletePost({ socialLink, brandfolder });
    let { onFailure, onSuccess } = this;
    Relay.Store.commitUpdate( mutation, { onFailure, onSuccess });
  }

  updatePost() {
    this.state({updating: true});
  }

  renderPostOrUpdate() {
    let { post } = this.props;

    if (this.state.updating){
      return (
        <Col xs={12}>
          <div> {post.title} </div>
          <div> {post.body}</div>
          <div> {post.author_email}</div>
          <Button onClick={this.deletePost.bind(this)}> Delete </Button>
          <Button onClick={this.updatePost.bind(this)}> Update </Button>
        </Col>
      )
    } else {
      return <PostInput post={post} updating={true}/>;
    }
  }

  render() {
    let { post } = this.props;
    return this.renderPostOrUpdate();
  }
}

export default Relay.createContainer(Post, {
  fragments: {
    post: () => Relay.QL`
      fragment on Post {
        id,
        body,
        title,
        author_email
      }
    `
  }
})