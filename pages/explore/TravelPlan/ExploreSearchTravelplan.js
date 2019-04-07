import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,Button, TouchableOpacity, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class SearchTravelplan extends React.Component {
    

    render() {
      return (
        <View style = {styles.VisitedPlaceContainer}>
          <View style = {styles.AccImageBox}>
            <Image style = {styles.AccImage} source = {{uri: 'https://pbs.twimg.com/profile_images/625292129288458240/k9tkU_Rl_400x400.png'}}>

            </Image>
          </View>
          <View style = {styles.VisitedPlaceBar}>
            
              <View style = {styles.wrap}>
                <Text style = {styles.AccName}>
                  Travel Plan to Lalaland with Friends and my other family join together{' '}
                </Text>
                <Text style = {styles.ActivityType}>
                  3/5 Slots{' '}
                </Text>
                
              </View>
              <View style = {styles.ButtonBox}>
                <View style = {styles.JoinButton}>
                  <Text>Join</Text>
                </View>
              </View>
              
          </View>
          
          
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    VisitedPlaceContainer: {
      height: 130,
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 15,
      paddingLeft: 15,
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
    VisitedPlaceBar: {
      flex: 3,
      flexDirection: 'column',
      paddingLeft: 10
      

    },
    AccImageBox: {
      width: 120,
      paddingTop: 10,
      paddingBottom: 10

    },
    AccImage: {
      flex: 1,
    },
    VisitedPlaceContent: {
      flex: 1,
      paddingLeft: 10,
      flexDirection: 'column',
    },
    wrap: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
    },
    AccName: {
      fontSize: 14,
      fontWeight: '700'
    },
    ActivityType: {
      fontSize: 14,
      flex: 1,
      fontWeight: '100'
    },
    ActivityName: {
      flex:1,
      fontSize: 14,
    },
    ButtonBox: {
      alignItems: 'flex-end',
      flexDirection: 'column'
    },
    JoinButton: {
      height: 30,
      width: 60,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center'
    }
    
    
  });