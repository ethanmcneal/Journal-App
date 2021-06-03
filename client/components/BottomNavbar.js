import React, { useContext, useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { AuthContext } from '../providers/AuthProvider';
import Home from '../screens/Home';
import Login from '../screens/Login';

const HomeRoute = () => {
  const {user} = useContext(AuthContext)
if(user){return (
<Home />
)} else {
  return <Login />
}

}

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomNavbar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'albums', title: 'Albums', icon: 'album', activeColor: '#222' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavbar;