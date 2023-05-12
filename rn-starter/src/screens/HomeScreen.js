import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  return (<View>
    <Text style={styles.text}>Welcome Home</Text>
    <Button 
        onPress={()=>
        props.navigation.navigate("Components")
        }
        title="Go to Components Demo"
    />
     <Button 
        onPress={()=>
        props.navigation.navigate("List")
        }
        title="Go to Friend"
    />
     <Button 
          onPress={()=>
          props.navigation.navigate("Image")
          }
          title="Go to Image Screen"
    />
      <Button 
          onPress={()=>
          props.navigation.navigate("Counter")
          }
          title="Go to Counter Screen"
    />
     <Button 
          onPress={()=>
          props.navigation.navigate("Color")
          }
          title="Go to Color Screen"
    />
      <Button 
          onPress={()=>
          props.navigation.navigate("Square")
          }
          title="Go to multi Color Screen"
    />
    </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default HomeScreen;
