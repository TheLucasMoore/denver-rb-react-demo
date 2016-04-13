import React from 'react';

export default class HomePage extends React.Component {
  render() {
    const header = "<h1>Hello</h1>"
    return(
      <div>
        <div dangerouslySetInnerHTML={{ __html: header }} />
        Welcome to the React Denver.rb Demo!
      </div>
    )
  }
}
