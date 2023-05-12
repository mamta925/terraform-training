import react, {useState} from "react";
import { View, Text , StyleSheet, TextInput } from "react-native";


const NameScreen = ()=>{ 
   
    const [name, setName] = useState("")

    return <View>
        <TextInput 
        style = {styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText = {(value)=> setName(value)}
        />
        <Text> Name : {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    input:{
            margin:15,
            borderColor:' black',
            borderWidth:1
    }
})

export default NameScreen