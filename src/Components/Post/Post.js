import React, { Component } from "react";

export class Post extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Title" />
        <input type="file" />
      </div>
    );
  }
}

export default Post;
