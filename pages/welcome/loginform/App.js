import React from 'react';
import { StyleSheet, Text, View, TextInput,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import InputForm from './inputForm';
import CheckBox from 'react-native-check-box';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  
  constructor(props) {
    super(props);
    this.state = { text: '', password: '', checked: false };
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <Text style={styles.loginTextStyle}>Login</Text>
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={styles.loginbox}>
            <InputForm icon='person' 
              setState={ (text) => this.setState({text}) }
              placeholder='username'
              value={this.state.text}
            />
            <InputForm icon='lock' 
              setState={ (text)=> this.setState({password: text}) }
              placeholder='Password'
              value={this.state.password}
            />
            <View style={styles.splitView}>
              <CheckBox
                style={{ flex: 1,padding: 0}}
                onClick={()=>{
                  this.setState({
                      isChecked:!this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}
                rightText={"Remember me"}
              />
              <Text>Forgot Password?</Text>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={ ()=>navigate('HomePost')}>
              <Text style={{ color: 'white', fontSize: 20, }} >Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ace7ef',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  loginbox: {
    // flex: 1,
    alignItems: 'stretch',
    marginTop: 20,
    padding: 30,
    paddingTop: 50,
    paddingBottom: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  loginTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#444747',
    borderRadius: 3,
    padding: 12,
  },
  splitView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 20,
  }
});
