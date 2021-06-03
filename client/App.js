import React from "react";
import { ScrollView, StyleSheet, View} from "react-native";
import { Provider as PaperProvider} from 'react-native-paper'
import { NativeRouter, Route, Link } from "react-router-native";
import BottomNavbar from "./components/BottomNavbar";
import Header from "./components/Header";
import {theme} from './constants/theme'


const App = () => (
  <PaperProvider theme={theme}>
    <Header />
    <BottomNavbar />
  </PaperProvider>
);
// AppRegistry.registerComponent("MyApp", () => App);
export default App;