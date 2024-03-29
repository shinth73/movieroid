/** @format */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      mode: 'modal',
      headerStyle: {
        backgroundColor: 'black',
        shadowColor: 'black',
        borderBottomColor: 'black',
      },
      headerTintColor: 'white',
      headerBackTitleVisible: false,
    }}>
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
