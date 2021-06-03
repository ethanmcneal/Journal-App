import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/api";

function Home() {
  const [test, setTest] = useState(null);
  useEffect(() => {
    getTest();
  }, []);

  const getTest = async () => {
    try {
      let res = await axios.get(`${API_URL}/api/api_test_2`);
      setTest(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Home</Text>
      <Text>{JSON.stringify(test)}</Text>
    </View>
  );
}

export default Home;
