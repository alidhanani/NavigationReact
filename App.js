import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUp';
import MainScreen from './Pages/MainScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ 
              title: 'Login',
              headerBackTitle: null,
              headerLayoutPreset:'center',
              headerLeft: null
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpPage}
            options={{ 
              title: 'Sign Up',
              headerBackTitle: null,
              headerLayoutPreset:'center',
              headerLeft: null
            }}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ 
            title: 'Home',
            headerBackTitle: null,
            headerLayoutPreset:'center',
            headerLeft: null 
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;