import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddBookmarkScreen from '../screens/AddBookmarkScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddBookmark" component={AddBookmarkScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
