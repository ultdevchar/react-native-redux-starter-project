// Define button objects as a component...

import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Button} from 'react-native';
import { useNavigation} from '@react-navigation/native';

// Import redux items...
import { useSelector } from 'react-redux';

// Define props to get navigation value from parent...
function CustomButton({screenName}) {

  // Create state for button enable/disable situation...
  const [isEnabled, setIsEnabled] = useState(false);

  // Create navigation object...
  const navigation = useNavigation();

  // Create selector to learn access situation...
  const defaultScreenAccessList = useSelector(state => state.scrreenAccess.screenAccessList);

  // Define use effect to hadle state changing...
  useEffect(() => {

    // Control access list then change flag...
    if(defaultScreenAccessList.find(name => {return name === screenName;})){

        // Change flag...
        setIsEnabled(true);
    }
    else{

        // Change flag...
        setIsEnabled(false);
    }
  });

  return (
      <View style={styles.button}>
       <Button
            disabled={!isEnabled} 
            title={`Go to ${screenName}!`} 
            onPress={() => navigation.navigate(screenName)} />
      </View>
  );
}

// Define styles...
const styles = StyleSheet.create({
  button:{
      margin:5
  }
});

export default CustomButton;