
import React from 'react';
import { StyleSheet, View, Text, Button, Switch } from 'react-native';

// Import components...
import Divider from '../components/Divider'
import Title from '../components/Title'
import CustomSwitch from '../components/CustomSwitch'
import CustomButton from '../components/CustomButton'

export default function ScreenHome() {

  return (

    // Define screen components...
    <View style={styles.screen}>

      {/* Define title component... */}
      <Title text="Welcome Home Page" />
      <Text>Please make request to access screens!...</Text>

      <Divider/>
      
      {/* Define switch components... */}
      <View style={styles.container}>
        <Text>'Screen One' Access     :</Text> 
        <CustomSwitch value="ScreenOne"/>
      </View>
      <View style={styles.container}>
        <Text>'Screen Two' Access     :</Text> 
        <CustomSwitch value="ScreenTwo"/>
      </View>
      <View style={styles.container}>
        <Text>'Screen Three' Access :</Text> 
        <CustomSwitch value="ScreenThree"/>
      </View>

      <Divider/>
      
      {/* Define button components which are also include navigation logic... */}
      <View style={styles.buttonContainer}>
        <CustomButton screenName = "ScreenOne"/>
        <CustomButton screenName = "ScreenTwo"/>
        <CustomButton screenName = "ScreenThree"/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  container: {
    margin: 5,
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  buttonContainer: {
    margin: 5,
    flexDirection: 'column'
  },
  switch:{
    marginLeft: 10,
    marginRight: 10
  }
});