import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [test, setTest] = useState(null);
  useEffect(() => {
    getTest();
  }, []);

  const getTest = async () => {
    try {
      let res = await axios.get("http://localhost:3001/api/api_test_2");
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
