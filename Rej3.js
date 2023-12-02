import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Rej3 = () => {
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState('');

  const buttonDalej = (text) => {
    setInputValue(text);
    if (text.length >= 5) {
      setInputValue('');
      navigation.navigate('Rej4');
    }
  };
  
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
          <Image
            source = {require('./assets/NeoBank.png')}
            style = {styles.headerText}
          />
      </View>
      <View style = {styles.imageContainer}>
          <Image
            source = {require('./assets/bialybutton.png')}
            style = {styles.image}
          />
      </View>
      <View style = {styles.imageContainer}>
        <TextInput
          placeholder="*|*|*|*|*"
          style={styles.input}
          onChangeText={buttonDalej}
          value={inputValue}
        />
      </View>
      <View style = {styles.div2}>
        <Text style = {styles.text2}>Rejestracja - krok 2</Text>
      </View>
      <View style = {styles.div}>
        <Text style = {styles.text}>Wprowadź kod SMS</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38BF2D'
  },
  header: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: '85%',
    top: '10%'
  },
  headerText: {
    width: '100%',
    height: '50%'
  },
  imageContainer: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '100%',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  div: {
    position: 'absolute',
    left: '5%',
    top: '40%',
    width: '90%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 20
  },
  div2: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '5%',
    top: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontFamily: 'Arial',
    fontSize: 20
  },
  input: {
    textAlign: 'center',
    padding: 15,
    borderRadius: 25,
    fontFamily: 'Arial',
    fontSize: 26,
    color: '#c0c0c0'
  },
});

export default Rej3;