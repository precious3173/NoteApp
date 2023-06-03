import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';



  
export default function App() {

  const[text, onChangeText] = React.useState('Enter Text');

  return (
    <View style={styles.container}>
      <View>

        <Image
        
        source = {require('./assets/note.png')}
        style= {styles.imageArrange}
        />
        <Text style= {styles.textColor}>
          My NotePad
          
        </Text>

        
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
      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
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
});
