import React from "react";
import { Text, StyleSheet , View} from "react-native";

const ComponentsScreen = () => {
  const name = 'Mamta';
  return <View>
    <Text style={styles.textStyle}>Getting started with react Native</Text>
    <Text style={styles.textStyle1}>This is from {name}</Text>
    </View>
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 45,
    color: 'black'
  },
  textStyle1:{
    fontSize: 20,
    color: 'black'
  }
});


export default ComponentsScreen;