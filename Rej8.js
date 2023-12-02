import { View, Text, StyleSheet, Image, TouchableOpacity ,KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Rej8 = () => {
  const navigation = useNavigation();
  const buttonZaloguj = () => {
    navigation.navigate('Rej9');
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
            source = {require('./assets/zielonybutton.png')}
            style = {styles.image}
          />
      </View>
      <View style = {styles.div3}>
        <Text style = {styles.text3}>Rejestracja - krok 6</Text>
      </View>
      <View style = {styles.div}>
        <Text style = {styles.text}>Rozpocznij skanowanie</Text>
      </View>
      <TouchableOpacity onPress = {buttonZaloguj} style = {styles.div2}>
        <Text style = {styles.text2}>Skanuj twarz</Text>
      </TouchableOpacity>
    </View>
  );
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
    alignItems: 'center',
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
    width: '90%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    //fontFamily: 'Arial',
    fontSize: 20
  },
  div2: {
    position: 'absolute',
    left: '5%',
    top: '45%',
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    //fontFamily: 'Arial',
    fontSize: 30,
    color: 'white'
  },
  div3: {
    position: 'absolute',
    left: '5%',
    width: '90%',
    height: '5%',
    top: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3: {
    //fontFamily: 'Arial',
    fontSize: 20
  }
});

export default Rej8;