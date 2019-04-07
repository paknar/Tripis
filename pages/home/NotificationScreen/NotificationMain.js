import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,Button, TouchableOpacity, Image } from 'react-native';


import NotifInvite from './NotificationInvite';
import NotifAsk from './NotificationAsk';
import NotifFriendReq from './NotificationFriendRequest';

class Notification extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.Container}>
        <View style={styles.Header}>
        <TouchableOpacity style={styles.BackButtonFrame} onPress={()=>navigate('HomePost')}>
          <Image

            style={styles.BackButton}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKVq_4bmNZTghjoN33u8URmBNDYemr765t-KDbMPGW3PeP_Sn'}}
            />
        </TouchableOpacity>
          <View style ={styles.blank01}>
            
          </View>
        </View>
        <View style={styles.Body}>
          <View style = {styles.ScrollBody}>
          <ScrollView style = {styles.ScrollBox}>
            <View style = {styles.NotifContent}>
              <NotifInvite>
              
              </NotifInvite>
            </View>
            <View style = {styles.NotifContent}>
              <NotifAsk>
    
              </NotifAsk>
            </View>
            <View style = {styles.NotifContent}>
              <NotifFriendReq>
    
              </NotifFriendReq>
            </View>
            <View style = {styles.NotifContent}>
              <NotifFriendReq>
    
              </NotifFriendReq>
            </View>
            <View style = {styles.NotifContent}>
              <NotifFriendReq>
    
              </NotifFriendReq>
            </View>
            <View style = {styles.NotifContent}>
              <NotifFriendReq>
    
              </NotifFriendReq>
            </View>
            <View style = {styles.NotifContent}>
              <NotifFriendReq>
    
              </NotifFriendReq>
            </View>
            <View style = {styles.NotifContent}>
              <NotifFriendReq>
    
              </NotifFriendReq>
            </View>
          </ScrollView>
          </View>
          
          
        </View>
      </View>
    );
  }
}
export default Notification;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: '93%',
    width: '100%',
    marginTop: '7%',
  },
  Header: {
    flexDirection:'row',
    height: '10%',
    width: '100%',  
  },
  BackButtonFrame: {
    height: '100%',
    width: '15%',
  },
  BackButton: {
    height: '100%',
    width: '100%',
  },
  blank01: {
    height: '100%',
    width: '85%',
  },
  
  Body: {
    height: '100%',
    width: '100%',
  },
  NotifContent: {
    height : '12.5%',
    width : '100%'
  },
  ScrollBox: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  }
  
});
