import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Radiobutton, Picker, RadioForm, SafeAreaView} from 'react-native'; 
import RadioButtonRN from 'radio-buttons-react-native';
import Constants from 'expo-constants';
import { Dropdown } from 'react-native-element-dropdown';

export default function App()  {

  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState('Male')
  const [bottle, setBottle] = useState(0)

  const genders =[
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'}
  ]

  const bottles = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },

  ];



  function pressGender(i) {
    setGender(i);
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>ALCOMETER</Text>

      <Text>Weight</Text>

      <TextInput
      placeholder='Paino...'
      onChangeText={text => setWeight(text)}
      value={weight}
      keyboardType='decimal'
      />

<Text>Gender</Text>
  <RadioButtonRN
    outerWidth={30}
          innerWidth={20}
          borderWidth={1}
          data={genders}
          color={"steelblue"}
          onPress={pressGender}
          wrapperStyle={{ padding: 3 }}
        />
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            alignItems: "center",
            
          }}
        >
          
        </View>

        <Dropdown
        labelField="label"
        valueField="value"
        value={bottle}
        onChange={item => {
          setBottle(item.value);
        }}

        data= {bottles}
        
        />
  

      </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    
  },
});
