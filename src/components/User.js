import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import CardSection from "./CardSection";
import UserDetail from "./UserDetail";

class User extends Component {
  render() {
    console.log("User", this.props.userData);
    let info = this.props.userData.map((prof, index) => {
      return <UserDetail key={index} userData={prof} />;
    });
    return <ScrollView>{info}</ScrollView>;
  }
}

export default User;
