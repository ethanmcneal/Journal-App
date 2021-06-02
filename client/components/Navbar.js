import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

const Navbar = props => {
    return (
        <View style={props.styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={props.styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor="#f0f4f7"
          style={props.styles.navItem}
        >
          <Text>About</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor="#f0f4f7"
          style={props.styles.navItem}
        >
          <Text>Topics</Text>
        </Link>
      </View>
    )
}

export default Navbar