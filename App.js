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
  const [hour, setHour] = useState(0)

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
  const hours = [
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
      <Text style={styles.text}>ALCOMETER</Text>

      <Text style={styles.text}>Weight</Text>

      <TextInput
      style={styles.pickers}
      placeholder='Paino...'
      onChangeText={text => setWeight(text)}
      value={weight}
      keyboardType='decimal'
      />

<Text>Gender</Text>
  <RadioButtonRN
  style={styles.pickers}
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

        <Text style={styles.text}>Bottles drunk</Text>

        <Dropdown
        style={styles.pickers}
        placeholder='Bottles...'
        labelField="label"
        valueField="value"
        value={bottle}
        onChange={item => {
          setBottle(item.value);
        }}

        data= {bottles}
        
        />

        <Text style={styles.text}>Hours passed</Text>

        <Dropdown
        style={styles.pickers}
        placeholder='Hours...'
        labelField="label"
        valueField="value"
        value={hour}
        onChange={item => {
          setHour(item.value);
        }}

        data= {hours}
        
        />
  

      </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#B7ECF7',
    paddingTop: Constants.statusBarHeight,
    alignContent: 'flex-start',
    
    
  },

  pickers: {
    borderRadius: 10,
    backgroundColor: '#fff',
    alignContent: 'flex-start',
    backgroundColor: 'white'
    
  },

  text: {
    borderRadius: 10,
    fontSize: 24,
    color: '#323D5C'
    
  },
});
