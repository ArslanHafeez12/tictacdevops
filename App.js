import React, { useState } from 'react';
import { Pressable,Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [getText, setText] = useState('0');

  const buttonPress = (msg) => {
    
    setText(getText + msg);
  };

  const onPressFunction=() =>{

  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, paddingBottom: 50 ,fontWeight: 'bold'}}>
        Tic Tac Toe Game
      </Text>
      <Text style={{ fontSize: 30 , transform: [{rotateZ: '180deg'}]}}>
        Player 2: X
      </Text>
      <View style={{ flexDirection: 'row'  }}>
      <Pressable style={styles.buttonStyle} onPress={onPressFunction}>
        <Text>X</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={onPressFunction}>
        <Text>X</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={onPressFunction}>
        <Text>X</Text>
      </Pressable>       
      </View>
      <View style={{ flexDirection: 'row'  }}>
      <Pressable style={styles.buttonStyle} onPress={onPressFunction}>
        <Text>X</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={onPressFunction}>
        <Text>X</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={onPressFunction}>
        <Text>X</Text>
      </Pressable>       
      </View>
      <View style={{ flexDirection: 'row'  }}>
      <Pressable style={styles.buttonStyle} onPress={onPressFunction}>
        <Text>X</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={onPressFunction}>
        <Text>X</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle} onPress={onPressFunction}>
        <Text>X</Text>
      </Pressable>       
      </View>
      <Text style={{ fontSize: 30, paddingBottom: 10 }}>
        Player 1: O
      </Text>


     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    textAlign: 'center',
    padding: 20,
    width: '40%',
    borderWidth: 1,
  }
});