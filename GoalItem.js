import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props){
    return(
        <View style={styles.goalItem}>
        <Pressable 
            onPress={props.onDelete}
            //android_ripple={{color:'#dddddd'}}
            style={({pressed}) => pressed && styles.pressedItem}
        >
        <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
            </View>
        
    )
}

const styles = StyleSheet.create({
    goalItem:{
     marginTop:15,
     borderRadius:6,
     backgroundColor:'#5e0acc'
    },
    goalText:{
     color:'white',
      margin:8,
      padding:8,
    },
    pressedItem:{
        opacity:0.5
    }
})

module.exports = GoalItem;