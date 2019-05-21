import React, { Component } from "react";

export class Post extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Title" />
        <input type="file" />
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default Post;
