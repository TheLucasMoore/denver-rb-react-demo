import Relay from 'react-relay';

export default class extends Relay.Mutation {
    getMutation() {
      return Relay.QL`mutation{createPost}`;
    }

    getVariables() {
      return {
        title: this.props.name,
        author_email: this.props.email,
        body: this.props.body
      };
    }

    getFatQuery() {
      return Relay.QL`
        fragment on createPostPayload {
          viewer {
            posts
          }
          createdPostEdge {
            node {
              author_email,
              title,
              body
            }
          }
        }
      `;
    }

    getConfigs() {
      return [
        {
          type: 'RANGE_ADD',
          parentName: 'viewer',
          connectionName: 'posts',
          edgeName: 'createdPostEdge',
          rangeBehaviors: {
            '': 'prepend'
          }
        }
      ];
    }
}
