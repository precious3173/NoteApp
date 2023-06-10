import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'

const AddNoteScreen = () => {

    const[text, onChangeText] = React.useState('Enter Text');
  return (
    <View>
 <TextInput
style = {styles.inputTextDesign}
editable
multiline
numberOfLines={1}
onChangeText={text => onChangeText(text
  )}
value={text}



/>
    </View>
  )
}

export default AddNoteScreen

const styles = StyleSheet.create({

    
})