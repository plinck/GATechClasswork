import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.INITIAL_STATE = {username: "",password: ""};
  }
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`form submitted, user:${this.state.username}, pw:${this.state.username}`);
    // clear
    this.setState({...this.INITIAL_STATE});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="col s12">
      <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input onChange={this.handleChange}
          type="text"
          id="username"
          placeholder="Username"
          value={this.state.username}
        />
        <input onChange={this.handleChange}
          type="password"
          id="password"
          placeholder="Password"
          value={this.state.password}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
