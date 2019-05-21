import React, { Component } from "react";
import "./style.css";

export class Post extends Component {
  state = {
    title: "",
    image: "",
    upload: false
  };
  setTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  setImageName = e => {
    const file = e.target.files[0];
    this.setBase64(file);
  };

  setBase64 = file => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    const present = this;
    reader.onload = function() {
      present.setState({
        image: reader.result
      });
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  };

  uploadPost = () => {
    console.log(this.state.title);
    console.log(this.state.image);
  };
  render() {
    return (
      <div className="postStyle">
        <input
          className="title"
          type="text"
          placeholder="Title"
          onChange={this.setTitle}
        />
        <input className="imageName" type="file" onChange={this.setImageName} />
        <button onClick={this.uploadPost}>Submit</button>
      </div>
    );
  }
}

export default Post;
