import Relay from 'react-relay';

export default class extends Relay.Mutation {
    getMutation() {
      return Relay.QL`mutation{deletePost}`;
    }

    getVariables() {
      return {
        id: this.props.post.id
      };
    }

    getFatQuery() {
      return Relay.QL`
        fragment on DeletePostPayload {
          viewer {
            posts
          }
          deleted_post_id
      }
    `;
    }

    getConfigs() {
      return [
        {
          type: 'NODE_DELETE',
          parentName: 'viewer',
          connectionName: 'posts',
          deletedIDFieldName: 'deleted_post_id'
        }
      ];
    }
}
