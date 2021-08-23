import React, { Component } from "react";

class HelloWord extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default HelloWord;
