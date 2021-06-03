import React, { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { theme } from "../constants/theme";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const {handleLogin} = useContext(AuthContext)
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label="Email"
          value={credentials.email}
          onChangeText={(e) => setCredentials({...credentials, email: e})}
        />
        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry
          value={credentials.password}
          onChangeText={(e) => setCredentials({...credentials, password: e})}
        />
        <Button
          labelStyle={{ color: "white" }}
          color={theme.colors.accent}
          style={styles.button}
          mode="contained"
          onPress={() => handleLogin(credentials)}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    // justifyContent: 'center',
    margin: "auto",
    flex: 1,
  },
  inputContainer: {
    width: "80%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 12,
  },
  input: {
    marginVertical: 15,
  },
  textContainer: {
    // backgroundColor: theme.colors.accent,
    // color: theme.colors.primary,
    padding: 25,
    marginVertical: 20,
    borderRadius: 8,
  },
  text: {
    fontSize: 40,
    // color: 'white'
  },
  button: {
    width: "40%",
    alignSelf: "center",
    color: "white",
    padding: 10,
    borderRadius: 8,
  },
});

export default Login;
