import React from 'react';
import Relay from 'react-relay';

class AppLayout extends React.Component {
    render() {
        return(
            <div>
                <h1>My Awesome Blog </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Relay.createContainer(AppLayout, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        whoami
      }
    `
  }
});
