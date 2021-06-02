import { Text, View } from "react-native";
import React, { useEffect, useState } from "react"
import axios from "axios";

export default function Home() {
    const [test, setTest] = useState(null)
    useEffect(() => {
        getTest()
    })

    const getTest = async() => {
        try {
            debugger
            let res = await axios.get('/api/api_test_2')
            setTest(res)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View>
  <Text>Home</Text>
  <Text>{JSON.stringify(test)}</Text>
  </View>
    )
}
