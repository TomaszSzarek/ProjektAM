import {Pressable, Text, View,Image} from "react-native";
import { styles } from './style';

const zmienMotyw = () => {
    console.log(`zmien motyw`);
  };

const zmienPin = () => {
    console.log(`zmien pin do aplikacji`);
};
const zmienPowiadomiena = () => {
    console.log(`zmien powiadomienia`);
  };
  const zmienLimitKarty = () => {
    console.log(`zmien limit karty`);
  };  
  const zmienPrzelewow = () => {
    console.log(`zmien limit przelewow`);
  };  
export function Profil({ navigation }) {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../../img/NeoBank.png')} style={styles.imageNeoBank} />
        </View>
        <Text style={styles.textStyle1}>Ustawienia Profilu</Text>
        <View style={styles.separator} />
        <Text style={styles.textStyle1}>Wygląd i dostęp</Text>
        <Pressable style={styles.presablebutton} onPress={zmienMotyw}>
            <Text style={styles.textPressable}>Zmień motyw</Text>
        </Pressable>
        <Pressable style={styles.presablebutton} onPress={zmienPin}>
            <Text style={styles.textPressable}>Zmień PIN</Text>
        </Pressable>
        <View style={styles.separator} />
        <Text style={styles.textStyle1}>Limity</Text>
        <Pressable style={styles.presablebutton} onPress={zmienLimitKarty}>
            <Text style={styles.textPressable}>Zmień limit dla karty</Text>
        </Pressable>
        <Pressable style={styles.presablebutton} onPress={zmienPrzelewow}>
            <Text style={styles.textPressable}>Zmień limit dla przelewów</Text>
        </Pressable>
        <View style={styles.separator} />
        <Text style={styles.textStyle1}>Dodatkowe</Text>
        <Pressable style={styles.presablebutton} onPress={zmienPowiadomiena}>
            <Text style={styles.textPressable}>Włącz powiadomienia na telefon</Text>
        </Pressable>
        </View>
    );
}
