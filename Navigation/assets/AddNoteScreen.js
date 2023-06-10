import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddNoteScreen = () => {

    const[text, onChangeText] = React.useState('Enter Text');
  return (
    <View>
 
    </View>
  )
}

export default AddNoteScreen

const styles = StyleSheet.create({

    imageArrange:{

        width: 50,
        height:50,
        padding:50
    
      },
    
      textColor:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        marginTop: 2
      },
    
      inputTextDesign:{
        backgroundColor: "white",
        padding : 2,
        width :100,
        marginTop: 50
      }
})