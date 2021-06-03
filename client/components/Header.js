import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { Platform, View } from 'react-native';
import MenuDrawer from './MenuDrawer';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';



const Header = () => {
    const [activeDrawer , setActiveDrawer] = useState(false)
    return( 
        <>
    <Appbar.Header>
       <Appbar.Content title="Journal"/>
        <Appbar.Action icon={MORE_ICON} onPress={() => setActiveDrawer(!activeDrawer)} />
        
    </Appbar.Header>
    <View>
        {activeDrawer && <MenuDrawer />}
    </View>
    </>
    )
};

export default Header;