
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { titleScreenThree } from '../constans/Constants'

// Getting screen header title information...
export const title = titleScreenThree;

export default function ScreenThree() {

  return (
    <View style={styles.screen}>
      <Text>Welcome to ScreenThree!</Text>
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
