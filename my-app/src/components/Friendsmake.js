import React from "react";
// import moment from "moment";
// import Loader from "react-loader-spinner";
// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friendsmake extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div >
        {this.state.friends.map((friend) => (
          <div className='handle'>{`${friend.name}, ${friend.age}, ${friend.email}`}</div>
        ))}
      </div>
    );
  }
}
export default Friendsmake;
