import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

export default class Initial extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/1.jpg')} style={styles.backgroundImage} />
        <View style={{position: 'absolute'}}>
            <View style={[styles.content,{backgroundColor: 'blue',}]}>
                <Ionicons name="logo-facebook" size={40} color="white" style={{marginRight: 8,}}/>
                <Text style={{fontSize: 25, color: 'white'}}>Sign up with Facebook</Text>
            </View>
            <View style={[styles.content,{backgroundColor: 'white',}]}>
                <Ionicons name="logo-google" size={40} color="black" style={{marginRight: 8,}}/>
                <Text style={{fontSize: 25, color: 'black'}}>Sign up with Google</Text>
            </View>
            <View style={[styles.content]}>
                <Text style={{fontSize: 18, color: 'white'}}>Or</Text>
            </View>
            <View style={[styles.content,{backgroundColor: 'black',}]}>
                <Text style={{fontSize: 25, color: 'white'}} onPress={()=>navigate('Register')}>Create Account</Text>
            </View>
            <View style={{borderBottomColor: 'white', borderBottomWidth: 1}}>
            </View>
            <View style={[styles.content]}>
                <Text style={{fontSize: 20, color: 'white', marginRight: 5}}>Already Have Account?</Text>
                <Text style={{fontSize: 20, color: 'Black', fontWeight:'bold'}} onPress={()=>navigate('Login')}>Login Here</Text>
            </View>
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
  
});
