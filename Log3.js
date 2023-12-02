import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Log3 = () => {
  const navigation = useNavigation();
  const buttonDalej = () => {
    navigation.navigate('Odblokowanie');
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
        />
      </View>
      <View style = {styles.imageContainer2}>
          <Image
            source = {require('./assets/zielonybutton.png')}
            style = {styles.image}
          />
      </View>
      <View style = {styles.div2}>
        <Text style = {styles.text2}>Logowanie - finalizacja</Text>
      </View>
      <View style = {styles.div}>
        <Text style = {styles.text}>Ustal PIN do aplikacji</Text>
      </View>
      <TouchableOpacity onPress = {buttonDalej} style = {styles.div3}>
        <Text style = {styles.text3}>Zatwierdź</Text>
      </TouchableOpacity>
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
  imageContainer2: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '10%',
    top: '85%'
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
    //fontFamily: 'Arial',
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
    //fontFamily: 'Arial',
    fontSize: 20
  },
  div3: {
    position: 'absolute',
    left: '5%',
    top: '85%',
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3: {
    //fontFamily: 'Arial',
    fontSize: 30,
    color: 'white'
  },
  input: {
    textAlign: 'center',
    padding: 15,
    borderRadius: 25,
    //fontFamily: 'Arial',
    fontSize: 26,
    color: '#c0c0c0'
  },
});

export default Log3;