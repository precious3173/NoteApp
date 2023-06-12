import { StyleSheet, Text, View , Image, TextInput, Pressable, Button} from 'react-native'
import React from 'react'
import { NavScreen } from '../Constant/Constant'

const Navigate = ({onExit}) => {
    
  return (
    <View style = {styles.navigateContainer}>
      <View>

      <Text style= {styles.textColor}>
  My NotePad, Time to make a difference
  
</Text>
<Image

source = {require('./assets/note.png')}
style= {styles.imageArrange}
/>

<Pressable>
<View style={styles.getStartedText}>

<Button

title = "Get Started"
color="#841584"
padding = {10}
margin = {30}
onPress={() => onExit(NavScreen.addnote)}

/>

</View>
</Pressable>

</View>
    </View>
  )
}

export default Navigate

const styles = StyleSheet.create({

    navigateContainer:{
        width:"100%",
        height: "100%",
        alignItems: "center", 
      justifyContent: "space-evenly"
     

    },
    imageArrange:{

        width: 50,
        height:50,
        marginStart: 30,
        padding:50,
        alignContent: "center", 
        marginEnd:30
    
      },
    
      textColor:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        marginStart:30,
        marginEnd:30
        
      },
      getStartedText:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        marginTop: 50,
        marginBottom: 20,
   
       
        
      },
    
      inputTextDesign:{
        backgroundColor: "white",
        padding : 2,
        width :100,
        marginTop: 50
      }
})