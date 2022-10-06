import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import Styles from './styles'

export default function Radiobutton({options, onPress}) {

  const [value, setValue] = useState('Male');

  const handlePress = (selected) => {
    setValue(selected);
    onPress(selected);
  }

  return (
    <>
    {options.map((item) => (
      <View key={item.value} style={Styles.radiobuttonContainer}>
      <Text style={Styles.label}>{item.label}</Text>  
      <Pressable style={Styles.unChecked} onPress={() => handlePress(item.value)}>
        {value === item.value && <View style={Styles.checked} />}
      </Pressable>
    </View>
    ))}
    
    </>
  )
}