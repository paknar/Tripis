import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import FootTab from '../../../footTab';


class HomePost extends React.Component {
  static navigationOptions = {
    title: 'HomePost',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.logo}>HUBLA</Text>
              <MaterialIcons name="notifications-none" size={40} color="black" style={styles.notif_button} onPress={ ()=>navigate('Notification')}/>
            </View>
            <View style={styles.tabs}>
              <Text style={styles.tabItems}>Worldwide</Text>
              <Text style={styles.tabItems} onPress={ ()=>navigate('HomePost') }>Post</Text>
              <Text style={styles.tabItems} onPress={ ()=>navigate('HomeActivity') }>Activity</Text>
            </View>

            <View style={styles.cardPost}>
              <View style={styles.cardHeader}>
                <Image
                  style={styles.profPic}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <Text style={{paddingTop: 20, paddingLeft: 10}}>SAUUASUUASU</Text>
              </View>

              <Image
                  style={styles.postPic}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />

              <Text style={styles.caption}>ajiwdniajwd opawjindopaij wdpiajw ndpia wndpianwpidjnapiw ndpianwdip naipwdna jwn dpia nwd ipnapi wdnpai wndpiawndj</Text>
              
              
            </View>
            <View style={styles.cardPost}>
              <View style={styles.cardHeader}>
                <Image
                  style={styles.profPic}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <Text style={{paddingTop: 20, paddingLeft: 10}}>SAUUASUUASU</Text>
              </View>

              <Image
                  style={styles.postPic}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />

              <Text style={styles.caption}>Caption kuh babla</Text>
              
              
            </View>
          </View>
          
        </ScrollView>
        <FootTab ></FootTab>
        {/* <View style={styles.footTab}>
            <View style={{flex: 1, alignItems: 'center'}} >
                <MaterialIcons name="home" size={44} onPress={ ()=>navigate('HomePost') }/>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <MaterialIcons name="search" size={44} onPress={ ()=>navigate('ExplorePost') }/>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <MaterialIcons name="person" size={44} />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <MaterialIcons name="add" size={44} />
            </View>
        </View> */}
      </View>
      
      
    );
  }
}
export default HomePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  cardPost : {
    margin: 5
  },

  cardHeader: {
    flexDirection: 'row',
  },

  profPic: {
    borderRadius: 50,
    margin: 8,
    width: 50,
    height: 50
  },

  postPic: {
    height: 300
  },

  caption: {
    paddingTop: 15,
    paddingLeft: 23,
    paddingRight: 23,
  },
  footTab: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    margin: 5,
  }

});
