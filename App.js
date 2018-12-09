import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
import SearchBox from "./src/components/SearchBox";

const App = () => {
  return (
    <View>
      <Header headerText={"Albums"} />
      <SearchBox />
    </View>
  );
};
export default App;
