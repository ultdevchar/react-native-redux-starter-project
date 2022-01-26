
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { titleScreenTwo } from '../constans/Constants'

// Getting screen header title information...
export const title = titleScreenTwo;


export default function ScreenTwo() {

  return (
    <View style={styles.screen}>
      <Text>Welcome to ScreenTwo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  }
});
