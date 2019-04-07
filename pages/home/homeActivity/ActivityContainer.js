import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,Button, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import Activity from './Activity';
import FootTab from '../../../footTab';
export default class HomeActivity extends React.Component {
  static navigationOptions = {
    title: 'HomeActivity',
  };
  
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.Container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.logo}>HUBLA</Text>
            <MaterialIcons name="notifications-none" size={40} color="black" style={styles.notif_button} onPress={ ()=>navigate('Notification')}/>
          </View>
          <View style={styles.tabs}>
            <Text style={styles.tabItems}>Worldwide</Text>
            <Text style={styles.tabItems} onPress={ ()=>navigate('HomePost') }>Post</Text>
            <Text style={styles.tabItems} onPress={ ()=>navigate('HomeActivity') }>Activity</Text>
          </View>

          <Activity>

          </Activity>
          <Activity>
            
          </Activity>
        </ScrollView>
        <FootTab ></FootTab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: "row",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  logo: {
    fontSize: 50,
    flex: 3
  },
  notif_button: {
    flex: 1,
    alignSelf: 'center',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tabItems : {
    flex: 1,
    fontSize : 20,
    textAlign: 'center',
  },
  footTab: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    margin: 5,
  }
  
  
});
