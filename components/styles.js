import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    radiobuttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      marginTop: 10,
      marginBottom: 10,
    },
    unChecked: {
      height: 25,
      width: 25,
      borderRadius: 50,
      borderWidth: 6,
      borderColor: '#841584',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checked: {
        height: 25,
        width: 25,
      borderRadius: 50,
      backgroundColor: '#841584'
    },
    label: {
        marginTop: 5,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    }
  })