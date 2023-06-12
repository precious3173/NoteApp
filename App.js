import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import Navigate from './Navigation/Navigate';
import { NavScreen } from './Constant/Constant';
import AddNoteScreen from './assets/AddNoteScreen';
imp



  
export default function App() {

  const{screen, setScreen} = useState(NavScreen.home);
 let selectScreen;

 if(screen === NavScreen.addnote){
  selectScreen = <AddNoteScreen/>;
 } else if(screen === NavScreen.home){
  selectScreen = <Navigate
  onExit ={(data) =>{
    setScreen(data)
  }}/>;
 }
  return (
    <View style={styles.container}>
    
      <View>
        {selectScreen}
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
