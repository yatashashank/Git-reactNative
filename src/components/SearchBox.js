import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import CardSection from "./CardSection";
import Card from "./Card";
import Profile from "./Profile";

class SearchBox extends Component {
  state = {
    text: ""
  };
  handleChangeInput = typedText => {
    this.setState({ text: typedText });
  };
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="Type the text here"
            onChangeText={this.handleChangeInput}
          />
        </CardSection>
        <Profile searchText={this.state.text} />
      </Card>
    );
  }
}

export default SearchBox;
