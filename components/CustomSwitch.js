// Define switch objects as a component...

import React, {useState} from 'react';
import { StyleSheet, View, Switch} from 'react-native';

// Import redux items...
import { useDispatch } from 'react-redux';
import { addScreenAccess, removeScreenAccess } from '../redux/actions/ActionScreenAccess';

// Define props to get switch value from parent...
const CustomSwitch = props => {

  // Adding dispatch...
  const dispatchScreenAccess = useDispatch();

  // Define state for switch object...
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {

    // Setting state...
    setIsEnabled(previousState => !previousState);

    // Control props value null situation...
    if(props.value != null){

      // Control switch enable situation with previous state(!)...
      if(isEnabled){

        // Remove screen access to store...
        dispatchScreenAccess(removeScreenAccess(props.value));
      }
      else{

        // Add screen access from store...
        dispatchScreenAccess(addScreenAccess(props.value));
      }
    }
  } 

  return (
    <View>
      <Switch 
        trackColor={{ false: "#767577", true: "#97b4d1" }}
        thumbColor={isEnabled ? "#4babf5" : "#f4f3f4"} 
        style={styles.switch} 
        onValueChange={toggleSwitch} 
        value={isEnabled}/>
    </View>
  );
}

// Define styles...
const styles = StyleSheet.create({
  switch:{
    marginLeft: 10,
    marginRight: 10
  }
});

export default CustomSwitch;