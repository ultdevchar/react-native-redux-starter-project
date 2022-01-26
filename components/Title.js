// Define title objects as a component...

import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

// Define props to get title value from parent...
const Title = props => {
  return (
      <View>
        <Text style={styles.title}>{props.text}</Text>
      </View>
  );
}

// Define styles...
const styles = StyleSheet.create({
  title:{
    fontSize: 24,
    margin: 10
  }
});

export default Title;