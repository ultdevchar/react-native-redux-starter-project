
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { titleScreenOne } from '../constans/Constants'

// Getting screen header title information...
export const title = titleScreenOne;

export default function ScreenOne() {

  return (
    <View style={styles.screen}>
      <Text>Welcome to ScreenOne!</Text>
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

