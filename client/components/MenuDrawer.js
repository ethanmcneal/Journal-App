import React, { useContext } from 'react';
import { Drawer } from 'react-native-paper';
import { AuthContext } from '../providers/AuthProvider';

const MenuDrawer = () => {

  const {handleLogout} = useContext(AuthContext)
  return (
    <Drawer.Section>
      <Drawer.Item
        label="First Item"
      />
      <Drawer.Item
        label="Logout"
        onPress={handleLogout}
      />
    </Drawer.Section>
  );
};

export default MenuDrawer;