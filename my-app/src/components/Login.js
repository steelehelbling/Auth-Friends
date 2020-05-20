import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/protected");
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="name here"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password here"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button onClick={this.login}>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
