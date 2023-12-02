import { Pressable, ScrollView, View, Text, Image, TextInput } from "react-native";
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';  

let typPozyczki = "";
let kwotaPozyczki = "";
let miesiac = "";
let rok = "";
let liczbaRat = "";
let liczbaWyliczonaKwota = "";

const wyslij = () => {
  console.log(`Typ Pożyczki: ${typPozyczki}`);
  console.log(`Kwota Pożyczki: ${kwotaPozyczki}`);
  console.log(`Miesiąc: ${miesiac}`);
  console.log(`Rok: ${rok}`);
  console.log(`Liczba rat: ${liczbaRat}`);
  console.log(`Wyliczona kwota: ${liczbaWyliczonaKwota}`);
};

const inputTypPozyczki = (text) => {
  typPozyczki = text;
};

const inputKwotaPozyczki = (text) => {
  kwotaPozyczki = text;
};

const inputMiesiac = (text) => {
  miesiac = text;
};

const inputRok = (text) => {
  rok = text;
};

const inputLiczbaRat = (text) => {
  liczbaRat = text;
};

const inputLiczbaWyliczonaKwota = (text) => {
  liczbaWyliczonaKwota = text;
};

export function Pozyczki({ navigation }) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
          <View style={styles.header}>
             <Image source={require('../../img/NeoBank.png')} style={styles.imageNeoBank} />
          </View>
          <Text style={styles.textStyle1}>Weź pożyczke</Text>
          <View style={styles.separator}/>
          <Text style={styles.textStyle1}>Typ Pożyczki</Text>
          <View style={styles.textbuttoninPut}>
            <TextInput style={styles.input} onChangeText={inputTypPozyczki} placeholder="Wprowadź tutaj"/>
          </View>
          <Text style={styles.textStyle1}>Kwota Pożyczki</Text>
          <View style={styles.textbuttoninPut}>
            <TextInput style={styles.input} onChangeText={inputKwotaPozyczki} placeholder="Wprowadź tutaj"/>
          </View>
          <Text style={styles.textStyle1}>Miesiąc</Text>
          <View style={styles.textbuttoninPut}>
            <TextInput style={styles.input} onChangeText={inputMiesiac} placeholder="Wprowadź tutaj"/>
          </View>
          <Text style={styles.textStyle1}>Rok</Text>
          <View style={styles.textbuttoninPut}>
            <TextInput style={styles.input} onChangeText={inputRok} placeholder="Wprowadź tutaj"/>
          </View>
          <Text style={styles.textStyle1}>Liczba rat</Text>
          <View style={styles.textbuttoninPut}>
            <TextInput style={styles.input} onChangeText={inputLiczbaRat} placeholder="Wprowadź tutaj"/>
          </View>
          <Text style={styles.textStyle1}>Wyliczona kwota</Text>
          <View style={styles.textbuttoninPut}>
            <TextInput style={styles.input} onChangeText={inputLiczbaWyliczonaKwota} placeholder="Wprowadź tutaj"/>
          </View>
        <Pressable style={styles.textbutton} onPress={wyslij}>
            <Text style={styles.text}>Zatwierdź</Text>
        </Pressable>
        <Pressable style={styles.textbutton} onPress={() => navigation.navigate('ProduktyView') }>
            <Text style={styles.text}>Anuluj</Text>
        </Pressable>
        </ScrollView>
    );
}
