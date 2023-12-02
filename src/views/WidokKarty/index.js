import {ScrollView,Pressable,Text, View,Image} from "react-native";
import { styles } from './style';

const zmienStatus = () => {
    console.log(`zmien status`);
  };
const zmienWizerunek  = () => {
    console.log(`zmien wizerunek`);
  };
const zablokujCzasowoKarty  = () => {
    console.log(`Zablokuj Karty`);
  };
const zmienPIN = () => {
    console.log(`zmien PIN`);
  };
const wymienKarte = () => {
    console.log(`Wymień karte`);
  };
const zastrzezKarte = () => {
    console.log(`Zastrzeż karte`);
  };



export function WidokKarty({ navigation }) {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
          <Image source={require('../../img/NeoBank.png')} style={styles.imageNeoBank} />
          </View>
          <Text style={styles.textStyle1}>Twoja Karta</Text>
          <View> 
            <Image source={require('../../img/Karta.png')} style={styles.image} />
            <Text style={styles.textKarta1}>NeoBank</Text>
            <Text style={styles.textKarta2}>1234 5678 1234 1234</Text>
          </View>
          <Text style={styles.textStyle3}>Z twoją kartą można płacić przez telefon</Text>
          <View style={styles.separator} />
          <Pressable style={styles.presablebutton} onPress={zmienStatus}>
            <Text style={styles.textPressable}>Zmień status transakcji zbliżeniowych</Text>
        </Pressable><Pressable style={styles.presablebutton} onPress={zmienWizerunek}>
            <Text style={styles.textPressable}>Zmień wizerunek karty</Text>
        </Pressable><Pressable style={styles.presablebutton} onPress={zablokujCzasowoKarty}>
            <Text style={styles.textPressable}>Zablokuj czasowo kartę</Text>
        </Pressable><Pressable style={styles.presablebutton} onPress={zmienPIN}>
            <Text style={styles.textPressable}>Zmień PIN do karty</Text>
        </Pressable><Pressable style={styles.presablebutton} onPress={wymienKarte}>
            <Text style={styles.textPressable}>Wymień kartę</Text>
        </Pressable>
        <Pressable style={styles.presablebutton} onPress={zastrzezKarte}>
            <Text style={styles.textPressable}>Zastrzeż kartę</Text>
        </Pressable>
        <View style={styles.separator}/>
        <Text style={styles.textStyle2}>Informacje o karcie</Text>
        <View style={styles.separator}/>
        <Text style={styles.textStyle4}>Opłąta za kartę za bieżący okres rozliczeniowy</Text>
        <Text style={styles.textStyle5}>Brak opłaty</Text>
        <View style={styles.separator}/>
        <Text style={styles.textStyle4}>Numer karty</Text>
        <Text style={styles.textStyle5}>2137</Text>
        <View style={styles.separator}/>
        <Text style={styles.textStyle4}>Numer rachunku</Text>
        <Text style={styles.textStyle5}>123xxx1234</Text>
        <View style={styles.separator}/>
        <Text style={styles.textStyle4}>Rodzaj karty</Text>
        <Text style={styles.textStyle5}>Karta płatnicza do konta</Text>
        <View style={styles.separator}/>
        <Text style={styles.textStyle4}>Dane użytkownika</Text>
        <Text style={styles.textStyle5}>zzzz zzzz</Text>
        <View style={styles.separator}/>
        <Text style={styles.textStyle4}>Termin ważności</Text>
        <Text style={styles.textStyle5}>31.02.2050</Text>
        <View style={styles.separator}/>
        <Text style={styles.textStyle4}>Ubezpieczenie karty</Text>
        <Text style={styles.textStyle5}>Karta nie jest ubezpieczona</Text>
        <View style={styles.separator}/>
        <Text style={styles.textStyle4}>Status Karty</Text>
        <Text style={styles.textStyle5}>Aktywna</Text>
        <View style={styles.separator}/>
        <Text style={styles.textStyle4}>Płatności zbliżeniowe</Text>
        <Text style={styles.textStyle5}>Włączone</Text>        
          </ScrollView>
    );
}
