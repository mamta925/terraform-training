import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
        const friends = [{
          name: 'Mamta',
          age: 27
        },
        {
          name: 'Neha',
          age: 27
        },
        {
          name: 'Megha1,2',
          age: 27
        },
        {
          name: 'Kangana',
          age: 27
        },{
            name: 'Mamta1',
            age: 27
          },
          {
            name: 'Neha1',
            age: 27
          },
          {
            name: 'Megha11,2',
            age: 26
          },
          {
            name: 'Kangana1',
            age: 28
          }];
        return <FlatList 
            data={friends} 
            renderItem={({item})=>{
              return <Text style = {styles.textStyle}> {item.name}  - Age: {item.age}</Text>
            }}
        />
      
}

const styles = StyleSheet.create({
   textStyle :{
    marginVertical:50
   }
})
export default ListScreen