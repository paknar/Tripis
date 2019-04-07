import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const InputForm = (props) => {
    return (
        <View style={styles.textInputBox}>
            <MaterialIcons name={props.icon} size={20} color='black'/>
            <TextInput onChangeText={props.setState}
                placeholder={props.placeholder}
                value={props.state}
                style={{ height: 40, fontSize:16 ,marginLeft: 30 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    loginTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        textDecorationLine: 'underline',
      },
      textInputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#2c3233',
        borderWidth: 1,
        borderRadius: 3,
        padding: 10,
        paddingTop: 4,
        paddingBottom: 4,
        marginBottom: 20,
        justifyContent: 'flex-start',
    }
});

export default InputForm;