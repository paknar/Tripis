import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,Button, TouchableOpacity, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class NotificationInvite extends React.Component {
    

    render() {
      return (
        <View style = {styles.QnAContainer}>
          <View style = {styles.QuestionBar}>
            <Text style = {styles.Question} fontSize= {32} numberOfLines = {2}>
            It is a long established fact that a reader will be distracted by the readable ?
            </Text>
            <MaterialCommunityIcons style = {styles.OptionButton} name = 'dots-vertical' size = {32} color = 'grey'>

            </MaterialCommunityIcons>
          </View>
          <View style = {styles.AnswerBar}>
            <Text style = {styles.Answer} numberOfLines = {4}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <View style = {styles.ImageBox}>
              <Image style = {styles.ImageAnswer} source = {{uri: 'https://d12dkjq56sjcos.cloudfront.net/pub/media/wysiwyg/New-York-Skyline-Big-Bus-Tours-Jan-2018.jpg'}}>

              </Image>
            </View>
            
          </View>
          <View style = {styles.LikeBar}>
            <MaterialCommunityIcons style = {styles.LikeButton} name = 'heart-outline' size = {32} color = 'black'></MaterialCommunityIcons>  
            <Text>103 Likes</Text>
          </View>

        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    QnAContainer: {
        height: 400,
        padding: 20,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderBottomWidth: 2
      },
      QuestionBar: {
        flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
        flexDirection: 'row',
    },
    OptionButton: {
      paddingTop: 5,
      paddingBottom: 5,
    },
    Question: {
        flex: 1,
        fontSize: 16,
        fontWeight: '200'
    },
    AnswerBar: {
        flex: 4,
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10,
    },
    Answer: {
      fontSize: 16,
      fontWeight: 'normal',
      opacity: 0.7
    },
    ImageBox : {
      flex: 1,
      paddingTop: 20,
    },
    ImageAnswer: {
      flex: 1
    },
    LikeBar: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 10,
    },
    LikeButton: {
      paddingLeft: 10
    }
    
  });