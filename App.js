import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import Navigate from './Navigation/Navigate';



  
export default function App() {


  return (
    <View style={styles.container}>
    
      <View>
        <Navigate/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
  },
 
});
