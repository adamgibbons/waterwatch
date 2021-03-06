/**
 * WaterWatch
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppContainer } from './app/AppContainer';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List Sites" component={AppContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
