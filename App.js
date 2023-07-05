import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import ServiceList from './ServiceList';
import ServiceDetail from './ServiceDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerTintColor: '#FFFFFF',
        }}
      >
        <Stack.Screen
          name="Landing"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ServiceList"
          component={ServiceList}
          options={{
            title: 'Available Services',
          }}
        />
        <Stack.Screen
          name="ServiceDetail"
          component={ServiceDetail}
          options={{
            title: 'Service Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
