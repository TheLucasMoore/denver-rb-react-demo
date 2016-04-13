import Relay from 'react-relay';

export default class UpdatePost extends Relay.Mutation {
    getMutation() {
      return Relay.QL`mutation{updatePost}`;
    }

    getFatQuery() {
      return Relay.QL`
        fragment on UpdatePostPayload {
          updated_post {
              id,
              author_email,
              title,
              body
          }
      }
      `;
    }

    getConfigs() {
      return [ {
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          updated_post: this.props.id
        }
      } ];
    }

    getVariables() {
      return {
        id: this.props.id,
        author_email: this.props.author_email,
        title: this.props.title,
        body: this.props.body
      };
    }
}