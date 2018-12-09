import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

class UserDetail extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(this.props.userData.html_url);
        }}
      >
        <CardSection>
          <View style={styles.thumbnailContainer}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: this.props.userData.avatar_url }}
            />
          </View>
          <View style={styles.textContainer}>
            {this.props.userData && <Text> {this.props.userData.login} </Text>}
            {this.props.userData.id && <Text>{this.props.userData.id}</Text>}
          </View>
        </CardSection>
      </TouchableOpacity>
    );
  }
}
const styles = {
  textContainer: {
    justifyContent: "space-around",
    flexDirection: "column"
  },
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
