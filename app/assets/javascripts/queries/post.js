import Relay from 'react-relay';

export default {
  post: (Component) => Relay.QL`
    query {
      node(id: $postId) {
        ${Component.getFragment('post')}
      }
    }
  `
}