import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Initial extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/1.jpg')} style={styles.backgroundImage} />
        <View style={styles.absolute}>
          <Text style={styles.text}>WELCOME TO</Text>
          <Text style={[styles.text, styles.box]}>LOGO</Text>
        </View>
        <View style={styles.button}>
          <Button
            onPress={ ()=> navigate('Initial')}
            title="Start"
            color="#000"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    
  },

  backgroundImage: {
    resizeMode: "cover",
  },
  absolute: {
    position: "absolute",
    
  },
  text: {
    fontSize: 30, 
    fontWeight: "bold",
  },
  box:{
    borderColor: "#000",
    borderWidth: 4,
    textAlign: "center",
    padding: 20,
    marginTop: 40.
  },

  button: {
      position: 'absolute',
      bottom: 50
  }
});
