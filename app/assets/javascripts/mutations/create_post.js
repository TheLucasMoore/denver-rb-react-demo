import Relay from 'react-relay';

export default class extends Relay.Mutation {
    getMutation() {
      return Relay.QL`mutation{createPost}`;
    }

    getVariables() {
      return {
        title: this.props.title,
        author_email: this.props.email,
        body: this.props.body
      };
    }

    getFatQuery() {
      return Relay.QL`
        fragment on CreatePostPayload {
          viewer {
            posts
          }
          created_post_edge {
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
          edgeName: 'created_post_edge',
          rangeBehaviors: {
            '': 'prepend'
          }
        }
      ];
    }
}
