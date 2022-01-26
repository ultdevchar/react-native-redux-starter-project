// Define divider objects as a component...

import React from 'react';
import { StyleSheet, View} from 'react-native';

export default function Divider() {

  return (
    <View style={styles.divider} />
  );
}

// Define style...
const styles = StyleSheet.create({
  divider:{
    margin: 15,
    height: 1, 
    backgroundColor: 'gray', 
    alignSelf: 'stretch'
  }
});