import react from "react";
import { View, Text , StyleSheet , Image} from "react-native";


const ImageDetails = ({title, imageSource})=>{
    return (
      <View>
           <Image source= {imageSource}/>
           <Text style={styles.textStyle}>{title}</Text>
      </View>

    )
}

const styles = StyleSheet.create({
    textStyle : {
      fontSize: 40
    }
})

export default ImageDetails