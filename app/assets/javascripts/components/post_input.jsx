import React from 'react';
import Relay from 'react-relay';
import { Input, Col, Button } from 'react-bootstrap';
import CreatePost from '../mutations/create_post';
import UpdatePost from '../mutations/update_post';


export default class PostInput extends React.Component {

  get email() {
    return this.props.post ? this.props.post.author_email : '';
  }

  get title() {
    return this.props.post? this.props.post.title : '';
  }

  get body() {
   return this.props.post ? this.props.post.body : ' ';
  }

  constructor(...args){
    super(...args);

    this.state = {
      email: this.email,
      title: this.title,
      body: this.body,
    }
  }

  handleEmailChange = e => { this.setState({email: e.target.value}); };
  handleTitleChange = e => { this.setState({title: e.target.value}); };
  handleBodyChange = e => { this.setState({body: e.target.valye }); };

  get onSuccess() {
    this.setState({email: '', title: '', body: ''});
    if (this.props.updating) {
      this.props.toggleUpdate();
    }
  }

  get onFailure() {
    return (transaction) => {
      const error = transaction.getError() || new Error('Mutation failed.');
      console.log(error);
    };
  }

  createPost() {
    let email = this.props.email;
    let title = this.props.title;
    let body = this.props.body;
    let mutation = new CreatePost({viewer: this.props.viewer, email, title, body});
    let { onFailure, onSuccess } = this;
    Relay.Store.commitUpdate( mutation, { onFailure, onSuccess });
  }

  updatePost() {
    let email = this.props.post.author_email;
    let title = this.props.post.title;
    let body = this.props.post.body;
    let id = this.props.post.id;
    let mutation = new UpdatePost({post: this.props.id, email, title, body});
    let { onFailure, onSuccess } = this;
    Relay.Store.commitUpdate( mutation, { onFailure, onSuccess });
  }

  renderButton() {
    if (this.props.updating) {
      return <Button onClick={this.updatePost.bind(this)}> Save Changes </Button>;
    }
    return <Button onClick={this.createPost.bind(this)}> Submit </Button>;
  }
  render() {
    return (
      <Col xs={12}>
        <Input type="text" placeholder="Author Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
        <Input type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
        <Input type="textarea" placeholder="Body" value={this.state.body} onChange={this.handleBodyChange.bind(this)}/>
        {this.renderButton()}
      </Col>
    )
  }
}
