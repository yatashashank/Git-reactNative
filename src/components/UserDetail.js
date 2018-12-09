import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

class UserDetail extends Component {
  render() {
    return (
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: this.props.userData.avatar_url }}
          />
        </View>
        <View>
          {this.props.userData && <Text> {this.props.userData.login} </Text>}
        </View>
      </CardSection>
    );
  }
}
const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
};

export default UserDetail;
