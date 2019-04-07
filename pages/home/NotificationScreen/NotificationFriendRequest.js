import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,Button, TouchableOpacity, Image } from 'react-native';


export default class NotifFriendReq extends React.Component {
    

    render() {
      return (
        <View style = {styles.Container}>
            <View style = {styles.body}>
                <View style={styles.NotificationContainer}>
                    <View style = {styles.NotificationAccPictureBox}>
                        <View style = {styles.NotificationAccPictureFrame}>
                            <Image
                                style={styles.NotificationAccPicture}
                                source={{uri: 'https://i.pinimg.com/originals/77/8d/ab/778dab2716a18c9b54f65071348c8248.jpg'}}
                            />
                        </View>
                        
                    </View>
                    <View style = {styles.NotificationContent}>
                        <View style = {styles.NotificationAccNameBox}>
                        <Text style = {styles.NotificationAccName}>Fajar Maulana</Text>
                        </View>
                        <View style = {styles.NotificationAccContentBox}>
                        <Text style = {styles.NotificationAccContent}>blabla123</Text>
                        </View>
                    </View>
                    
                </View>
                <View style = {styles.TimeStampBox}>
                    <Text style = {styles.TimeStamp}>5 hours ago</Text>
                </View>
            </View>
            
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
    },
    body : {
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        paddingBottom: '5%',
        paddingTop: '5%',
        borderBottomWidth: 1,
    },
    NotificationContainer: {
        flexDirection: 'row',
        height: '70%',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    NotificationAccPictureBox: {
        height: '100%',
        width: '25%',
        
    },
    NotificationAccPictureFrame: {
        width: '100%',
        height: '100%',
        paddingTop: '10%',
        paddingBottom: '10%',
        paddingRight: '15%',
        paddingLeft: '15%',
    },
    NotificationAccPicture : {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'grey'
        
    },
    NotificationContent: {
        flexDirection: 'column',
        height: '100%',
        width: '75%'
    },
    NotificationAccNameBox : {
        height: '50%',
        width: '100%',
    },
    NotificationAccName : {
        height: '100%',
        width: '100%',
        fontSize: 20,
        paddingTop: '3%',
    },
    NotificationAccContentBox : {
        height: '50%',
        width: '100%',
    }, 
    NotificationAccContent : {
        height: '100%',
        width: '100%',
        fontSize: 15,
        paddingTop: '2.5%',
        opacity: 0.7,
    }, 
    TimeStampBox : {
        flexDirection: 'column',
        height: '30%',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    TimeStamp : {
        height: '100%',
        width: '100%',
        paddingLeft: '2%',
        opacity: 0.5,
    },
  });