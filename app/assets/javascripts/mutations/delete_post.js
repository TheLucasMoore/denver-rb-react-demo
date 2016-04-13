import Relay from 'react-relay';

export default class extends Relay.Mutation {
    getMutation() {
      return Relay.QL`mutation{deletePost}`;
    }

    getVariables() {
      return {
        id: this.props.socialLink.id
      };
    }

    getFatQuery() {
      return Relay.QL`
        fragment on deletePostPayload {
          viewer {
            posts
          }
          deletedPostId
      }
    `;
    }

    getConfigs() {
      return [
        {
          type: 'NODE_DELETE',
          parentName: 'viewer',
          connectionName: 'postss',
          deletedIDFieldName: 'deletedPostId'
        }
      ];
    }
}
