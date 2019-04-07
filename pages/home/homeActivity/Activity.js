import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,Button, TouchableOpacity, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Activity extends React.Component {
    

    render() {
      return (
        <View style = {styles.ActivityContainer}>
          <View style = {styles.ActivityBar}>
            <View style = {styles.AccImageBox}>
              <Image style = {styles.AccImage} source = {{uri: 'https://pbs.twimg.com/profile_images/625292129288458240/k9tkU_Rl_400x400.png'}}>

              </Image>
            </View>
            <View style ={styles.ActivityContent}>
              <View style = {styles.wrap}>
                <Text style = {styles.AccName}>
                  FarisBahdlor 
                </Text>
                <Text style = {styles.ActivityType}>
                  Created Travel Plan :
                </Text>
              </View>
              <Text style = {styles.ActivityName} numberOfLines = {2}>
                Travel to LalaLand
              </Text>
            </View>
          </View>
          <View style = {styles.ActivityTimeBox}>
            <Text style = {styles.ActivityTime}>
              10 Second ago
            </Text>
          </View>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    ActivityContainer: {
      height: 100,
      paddingTop: 10,
      paddingBottom: 10,
      justifyContent: 'flex-start',
      flexDirection: 'column',
      borderBottomWidth: 1,
      borderColor: 'grey'
    },
    ActivityBar: {
      flex: 3,
      flexDirection: 'row',
      paddingRight: 15,
      paddingLeft: 15,

    },
    AccImageBox: {
      width: 55,

    },
    AccImage: {
      flex: 1,
      borderRadius: 100,
      borderColor: 'grey'
    },
    ActivityContent: {
      flex: 1,
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'column'
    },
    wrap: {
      flex: 1,
      flexDirection: 'row'
    },
    AccName: {
      paddingRight: 5,
      fontSize: 14,
      fontWeight: '200'
    },
    ActivityType: {
      fontSize: 14,
      flex: 1,
      opacity: 0.7
    },
    ActivityName: {
      flex:1,
      paddingBottom: 5,
      fontSize: 14,
      opacity: 0.7
    },
    ActivityTimeBox :{
      flex: 1,
      flexDirection: 'column',
      paddingTop: 5,
      paddingRight: 15,
      paddingLeft: 15,
      opacity: 0.5
    },
    ActivityTime: {
      fontSize: 12
    }
    
    
  });