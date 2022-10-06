import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      padding: 25,
      backgroundColor: '#B7ECF7',
      paddingTop: Constants.statusBarHeight,
      alignContent: 'flex-start',
      
      
    },

    containerMain: {
        marginTop: '10%',
        marginBottom: '10%',
        borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
        
        
      },
    
  
    pickers: {
      padding: 15,
      fontSize: 24,
      borderRadius: 10,
      backgroundColor: '#fff',
      alignContent: 'flex-start',
      backgroundColor: 'white',
      
      
    },




  
    text: {
        textDecorationLine: 'underline',
      borderRadius: 10,
      fontSize: 24,
      color: '#323D5C',
      padding: 5,
      
    },

    textHeader: {
        padding: 10,
        textDecorationLine: 'underline',
      borderRadius: 10,
      fontSize: 35,
      borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
      color: '#323D5C'
      
    },
    textresult: {
        textAlign: 'center',
        textAlignVertical: "center",
        borderRadius: 100,
        alignContent: 'flex-start',
        marginTop: 25,
        marginBottom: 25,
        fontSize: 35,
        width: '100%',
        height: 80,
        color: 'black',
        
        backgroundColor: '#F3FBFE'
        
      },
  });