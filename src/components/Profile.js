import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import CardSection from "./CardSection";
import User from "./User";
import Button from "./Button";

class Profile extends Component {
  state = {
    user: []
  };

  getUser = userName => {
    axios
      .get(
        `https://api.github.com/search/users?q=${userName}&client_id=7affacd2673d47bfdee8&client_secret=5e402d4e3c51b0edaa164b9581f92d7bfe064981`
      )
      .then(response => {
        // console.log(response.data.items);
        this.setState({
          user: response.data.items
        });
      });
  };
  render() {
    const userName = this.props.searchText;
    console.log(userName);
    this.getUser(userName);
    console.log("From profile", this.state.user);
    return (
      <CardSection>
        {/* <Text>{this.props.searchText}</Text> */}
        {this.state.user.length > 0 && <User userData={this.state.user} />}
      </CardSection>
    );
  }
}

export default Profile;
