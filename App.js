
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// Import navigation items...
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import redux items...
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReducerScreenAccess from './redux/reducers/ReducerScreenAccess';

// Import screens...
import ScreenHome from './screens/ScreenHome';
import ScreenOne, {title as titleScreenOne} from './screens/ScreenOne';
import ScreenTwo, {title as titleScreenTwo} from './screens/ScreenTwo';
import ScreenThree, {title as titleScreenThree} from './screens/ScreenThree';

// Creating navigation stack object...
const Stack = createNativeStackNavigator();

// Combining reducers to keep all reducers in single object...
const rootReducer = combineReducers({
  scrreenAccess: ReducerScreenAccess
});

// Creating store...
const store = createStore(rootReducer);

export default function App() {

  return (

    // Defining provider to reach store from whole project...
    <Provider store = {store}>
      
      {/* Defining navigation blocks... */}
      <NavigationContainer>

        {/*  Home screen assign as a initial screen!... */}
        <Stack.Navigator initialRouteName="ScreenHome">

          {/* Adding options attribute for home screen to hide header area... */}
          <Stack.Screen name = "ScreenHome" component = {ScreenHome} options = {{headerShown: false}} />
          <Stack.Screen name = "ScreenOne" component = {ScreenOne} options = {{title: titleScreenOne}} />
          <Stack.Screen name = "ScreenTwo" component = {ScreenTwo} options = {{title: titleScreenTwo}} />
          <Stack.Screen name = "ScreenThree" component = {ScreenThree} options = {{title: titleScreenThree}} /> 
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

