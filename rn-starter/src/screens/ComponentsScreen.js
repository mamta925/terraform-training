import React from "react";
import { Text, StyleSheet , View} from "react-native";

const ComponentsScreen = () => {
  return <View>
    <Text style={styles.textStyle}>This is from Mamta</Text>
    <Text style={styles.textStyle}>This is from Mamta</Text>
    </View>
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 30,
    color: 'black'
  }
});


export default ComponentsScreen;