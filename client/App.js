import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import Navbar from "./components/Navbar";
import About from "./screens/About";
import Home from "./screens/Home";


const App = () => (
  <NativeRouter>
    <View style={styles.container}>
     <Navbar styles={styles}/>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/topics" component={Topics} /> */}
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
});

// AppRegistry.registerComponent("MyApp", () => App);
export default App;