import React from "react";
import { StyleSheet, View} from "react-native";
import {Provider as PaperProvider} from 'react-native-paper'
import { NativeRouter, Route, Link } from "react-router-native";
import BottomNavbar from "./components/BottomNavbar";
import Navbar from "./components/Navbar";
import About from "./screens/About";
import Home from "./screens/Home";


const App = () => (
  <PaperProvider>
  <NativeRouter>
    <View style={styles.container}>
     <Navbar styles={styles}/>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/topics" component={Topics} /> */}
      <BottomNavbar />
    </View>
  </NativeRouter>
  </PaperProvider>
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