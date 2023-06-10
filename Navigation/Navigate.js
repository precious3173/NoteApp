import { StyleSheet, Text, View , Image, TextInput} from 'react-native'
import React from 'react'

const Navigate = () => {
    
  return (
    <View style = {styles.navigateContainer}>
      <View>

      <Text style= {styles.textColor}>
  My NotePad
  
</Text>
<Image

source = {require('./assets/note.png')}
style= {styles.imageArrange}
/>

<View>

<Text style={styles.getStartedText}>
    Get Started
</Text>
</View>
</View>
    </View>
  )
}

export default Navigate

const styles = StyleSheet.create({

    navigateContainer:{
        width:"100%",
        height: "100%",
        alignItems: "center"
     

    },
    imageArrange:{

        width: 50,
        height:50,
        padding:50,
        alignContent: "center"
    
      },
    
      textColor:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
        
      },
      getStartedText:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        marginTop: 50,
        marginBottom: 20,
       paddingRight:20,
       paddingLeft:20,
        backgroundColor: "red"
        
      },
    
      inputTextDesign:{
        backgroundColor: "white",
        padding : 2,
        width :100,
        marginTop: 50
      }
})