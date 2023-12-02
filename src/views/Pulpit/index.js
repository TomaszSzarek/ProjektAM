//import React from 'react';
import {Text, View, Image} from "react-native";
import { styles } from './style';
//import LinearGradient from 'react-native-linear-gradient';

export function Pulpit({ navigation }) {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
          <Image source={require('../../img/NeoBank.png')} style={styles.imageNeoBank} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle1}>KontoBardziejNeo</Text>
            <Text style={styles.textStyle2}>Dostępne środki</Text>
            <Text style={styles.textStyle3}>2137</Text>
          </View>
          {/* <LinearGradient
        colors={['green', 'white']}
        style={styles.textContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text style={styles.textStyle1}>KontoBardziejNeo</Text>
        <Text style={styles.textStyle2}>Dostępne środki</Text>
        <Text style={styles.textStyle3}>21321</Text>
      </LinearGradient> */}
          <View style={styles.bottom}>
            <Image source={require('../../img/Reklama.png')} style={styles.image} />
          </View>
        </View>
      );
}
