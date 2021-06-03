import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../screens/Home';

const HomeRoute = () => <Home />;

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