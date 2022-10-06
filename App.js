import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, ScrollView, Alert} from 'react-native'; 
import Radiobutton from './components/Radiobutton';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';


export default function App()  {

  const [weight, setWeight] = useState(0)
  const [promilles, setPromilles] = useState(0)
  const [gender, setGender] = useState('Male')
  const [bottle, setBottle] = useState(1)
  const [hour, setHour] = useState(0)
  let promillehelper

  const genders =[
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'}
  ]

  const bottles = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },

  ];
  const hours = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },

  ];

  const calculation = () =>{
    if (bottle > 0) {
      if (weight === 0){
        Alert.alert(
          "Enter weight before pressing calculate!"
        )
      }else if ( hour === 0 ) {
        
          Alert.alert(
            "Enter amount of time passed!"
          )
        
      }else if (gender === 'Male'){
        let bottleamount = (bottle/3)
        let grams = bottleamount*8*4.5
        let burning = weight/10
        let gramsleft = grams - burning*hour
        let maleresult = (gramsleft / (weight * 0.7)).toFixed(2)
        promillehelper = maleresult
        if (promillehelper < 0 ){
          setPromilles(0)
        }else {
          setPromilles(promillehelper)
        }
      }else if (gender === 'Female'){
        let bottleamount = (bottle/3)
        let grams = bottleamount*8*4.5
        let burning = weight/10
        let gramsleft = grams - burning*hour
        let femaleresult = (gramsleft / (weight * 0.6)).toFixed(2)
        promillehelper = femaleresult
        if (promillehelper < 0 ){
          setPromilles(0)
        }else{
          setPromilles(promillehelper)
          
        }
        
      }

    }
    
  }

  

  return (
    <ScrollView style={styles.container}>
    <SafeAreaView>
    <View style={styles.containerMain}>
      <Text style={styles.textHeader}>ALCOMETER</Text>

      <Text style={styles.text}>Weight</Text>

      <TextInput
      style={styles.pickers}
      placeholder='Paino...'
      onChangeText={text => setWeight(text)}
      value={weight}
      keyboardType='decimal'
      />

<Text style={styles.text}>Gender</Text>

<Radiobutton options={genders} onPress={(value) => {setGender(value)}}/> 

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

        <View>
          <Text style={styles.textresult}>{promilles} ppm</Text>
        </View>

        
        <Button 
        onPress={calculation}
        title="You drunk?"
        color="#841584"
        ></Button>
        
        
        
  

      </View>
      </SafeAreaView>
      </ScrollView>
    );
  
  }
