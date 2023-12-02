import React, { useState } from 'react';
import {ScrollView,Text, View,Image} from "react-native";
import { styles } from './style';
import DateInputField from './data.js';
import SearchView from './searchView.js';

export function Historia({ navigation }) {
    return (
        <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../../img/NeoBank.png')} style={styles.imageNeoBank} />
        </View>
        <Text style={styles.textStyle3}>Historia Płatności</Text>
        <Text style={styles.textStyle4}>Wybierz konto</Text>
        <View style={styles.textContainer}>
            <Text style={styles.textStyle1}>123413242</Text>
            <Text style={styles.textStyle2}>Karta płatnicz do konta</Text>
        </View>
        <Text style={styles.textStyle4}>Wybierz datę</Text>
        <View style={styles.Container2}>
            <DateInputField/>
         </View>
         <View style={styles.separator} />
         <SearchView/>
         <View style={styles.separator} />
        </ScrollView>
    );
}
