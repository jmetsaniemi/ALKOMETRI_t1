import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import Styles from './styles'

export default function Radiobutton({options, onPress}) {

    //tämä komponentti luotu tunneilla olleen ohjeen mukaan

    

  const [value, setValue] = useState('Male');

  //funktio valinnan käsittelyyn. Muuttuja päivittyy ja välittyy komponentin käyttökohteelle

  const handlePress = (selected) => {
    setValue(selected);
    onPress(selected);
  }

  return (
    //välitetään muuttujat propseina ja renderöidään radiobuttonit. Eli tässä tapauksessa taulukossa on kaksi labelia ja valueta, joista muodostuu 2 painettavaa buttonia labeleineen
    //tyylit tuodaan styles.js:stä ja näillä muotoillaan labeliteksti ja pressable komponentit
    <>
    {options.map((item) => (
      <View key={item.value} style={Styles.radiobuttonstyles}>
      <Text style={Styles.label}>{item.label}</Text>  
      <Pressable style={Styles.unChecked} onPress={() => handlePress(item.value)}>
        {value === item.value && <View style={Styles.checked} />}
      </Pressable>
    </View>
    ))}
    
    </>
  )
}