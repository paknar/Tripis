import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,Button } from 'react-native';

export default class LinksScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.Container}>
        <View style={styles.UpperContent}>
          <View  style={styles.blank01}>

          </View>
          <View style={styles.blank02}>
            <Text style={styles.Title} fontColor='white'>Register</Text>
          </View>
        </View>
        <View style={styles.LowwerContent}>
          <ScrollView style={styles.ScrollBox}>
            <View style={styles.RegisterInputBox}>
              <TextInput style={styles.RegisterInput} placeholder="First Name" placeholderTextColor='grey'>

              </TextInput>
            </View>
            <View style={styles.RegisterInputBox}>
              <TextInput style={styles.RegisterInput} placeholder="Last Name" placeholderTextColor='grey'>

              </TextInput>
            </View>
            <View style={styles.RegisterInputBox}>
              <TextInput style={styles.RegisterInput} placeholder="Birth Date" placeholderTextColor='grey'>

              </TextInput>
            </View>
            <View style={styles.RegisterInputBox}>
              <TextInput style={styles.RegisterInput} placeholder="Phone Number" placeholderTextColor='grey'>

              </TextInput>
            </View>
            <View style={styles.RegisterInputBox}>
              <TextInput style={styles.RegisterInput} placeholder="Country" placeholderTextColor='grey'>

              </TextInput>
            </View>
            <View style={styles.RegisterInputBox}>
              <TextInput style={styles.RegisterInput} placeholder="City" placeholderTextColor='grey'>

              </TextInput>
            </View>
            <View style={styles.RegisterInputBox}>
              <Button style={styles.RegisterNextButton}
                onPress={()=>navigate('HomePost')}
                title="Submit"
                color='grey'
                >
              
              </Button>
            </View>
          </ScrollView>
        </View>
        
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  blank01: {
    flex: 3,
    height: '100%',
    width: '100%'
  },
  blank02: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  Title: {
    flex: 1,
    paddingLeft: '30%',
    paddingRight: '30%',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  BackgroundImage: {
    height:'100%',
    width: '100%'
  },
  ScrollBox: {
    flex:1,
    height: '100%',
    width: '100%'
  },
  RegisterInputBox: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    height: '90%'
  },
  RegisterInput: {
      flex: 1,
      flexDirection: 'column',
      paddingLeft: '5%',
      paddingRight: '5%',
      borderColor: 'grey',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: 'white'
  },
  RegisterNextButton: {
    flex: 1,
    borderColor: 'yellow',
    borderWidth: 10,
    borderRadius: 20,
    flexDirection: 'column',
    paddingTop: 15,
    backgroundColor: 'grey'
},
  UpperContent:{
      flex: 2,
      backgroundColor: 'green',
      flexDirection: 'column',
      width: '100%',
      height: '100%'

  },
  LowwerContent:{
    flex: 4,
    flexDirection: 'column',
    paddingTop: '5%',
    paddingBottom: '5%',
    width: '100%',
    height: '90%'

}
});
