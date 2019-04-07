import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import ExploreTravelPlan from '../TravelPlan/ExploreSearchTravelplanMain';

import FootTab from '../../../footTab';

export default class ExploreDestination extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.searchBox}>
              <MaterialIcons name="search" size={36}/>
              <TextInput placeholder="search" style={styles.searchFrom} />
            </View>
          </View>
          <View style={styles.tabContainer}>
            <View style={styles.tabItem} >
              <Text style={styles.tabText} onPress={ ()=>navigate('ExploreTravelPlan') }>Travel Plan</Text>
            </View>
            <View style={styles.tabItem} >
              <Text style={styles.tabText} onPress={ ()=>navigate('ExploreDestination') }>Destination</Text>
            </View>
            <View style={styles.tabItem} >
              <Text style={styles.tabText} onPress={ ()=>navigate('ExplorePost') }>Post</Text>
            </View>
          </View>

          {/* Kategori */}
          <ScrollView horizontal={true}>
            <View style={styles.horizontalList}>
              <View>
                <Image
                  style={styles.horizontalListPic}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <View style={{position: 'absolute',   left: 0, right: 0,bottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Kontol</Text>
                </View>
              </View>
              <View>
                <Image
                  style={styles.horizontalListPic}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <View style={{position: 'absolute',   left: 0, right: 0,bottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Kontol</Text>
                </View>
              </View>
              <View>
                <Image
                  style={styles.horizontalListPic}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <View style={{position: 'absolute',   left: 0, right: 0,bottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Kontol</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          
          {/* Kota */}
          <View>
            <View style={{flexDirection: 'row', margin: 10, alignItems: 'baseline'}}>
              <Text style={{flex: 2, fontWeight: 'bold', fontSize: 20}}>Yogyakarta</Text>
              <Text style={{flex: 4,  fontSize: 12, bottom: 0, color: 'red'}}>See More</Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.horizontalList}>
                <View>
                  <Image
                    style={styles.horizontalListPicContent}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                  />
                  <View style={{position: 'absolute',   left: 0, right: 0,bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign:"center"}}>farisbahdlor kontol longor</Text>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.horizontalListPicContent}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                  />
                  <View style={{position: 'absolute',   left: 0, right: 0,bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign:"center"}}>Kontol</Text>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.horizontalListPicContent}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                  />
                  <View style={{position: 'absolute',   left: 0, right: 0,bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign:"center"}}>Kontol</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            
          </View>

          <View>
            <View style={{flexDirection: 'row', margin: 10, alignItems: 'baseline'}}>
              <Text style={{flex: 2, fontWeight: 'bold', fontSize: 20}}>Yogyakarta</Text>
              <Text style={{flex: 4,  fontSize: 12, bottom: 0, color: 'red'}}>See More</Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.horizontalList}>
                <View>
                  <Image
                    style={styles.horizontalListPicContent}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                  />
                  <View style={{position: 'absolute',   left: 0, right: 0,bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign:"center"}}>farisbahdlor kontol longor</Text>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.horizontalListPicContent}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                  />
                  <View style={{position: 'absolute',   left: 0, right: 0,bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign:"center"}}>Kontol</Text>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.horizontalListPicContent}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                  />
                  <View style={{position: 'absolute',   left: 0, right: 0,bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign:"center"}}>Kontol</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            
          </View>

          <View>
            <View style={{flexDirection: 'row', margin: 10, alignItems: 'baseline'}}>
              <Text style={{flex: 2, fontWeight: 'bold', fontSize: 20}}>Yogyakarta</Text>
              <Text style={{flex: 4,  fontSize: 12, bottom: 0, color: 'red'}}>See More</Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.horizontalList}>
                <View>
                  <Image
                    style={styles.horizontalListPicContent}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                  />
                  <View style={{position: 'absolute',   left: 0, right: 0,bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign:"center"}}>farisbahdlor kontol longor</Text>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.horizontalListPicContent}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                  />
                  <View style={{position: 'absolute',   left: 0, right: 0,bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign:"center"}}>Kontol</Text>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.horizontalListPicContent}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                  />
                  <View style={{position: 'absolute',   left: 0, right: 0,bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign:"center"}}>Kontol</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            
          </View>
        </View>
      </ScrollView>
      <FootTab ></FootTab>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header:{
    marginBottom: 5,
    padding : 10,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  searchBox:{
    flexDirection: 'row',
  },
  searchFrom:{
    marginLeft: 15,
    flex: 1,
    borderBottomWidth: 1,
    flexWrap: 'wrap',
    alignItems: 'stretch',
    height: 36,
  },
  tabContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 10,
  },
  tabItem:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#cccdce',
  },
  tabText:{
    fontSize: 18,
  },
  horizontalList: {
    flexDirection: 'row',
  },
  horizontalListPic: {
    width: Dimensions.get('window').width/3, 
    height: 75,
    margin: 5,
    borderRadius: 20,
    resizeMode: 'cover'
  },
  horizontalListPicContent: {
    width: Dimensions.get('window').width/3, 
    height: 150,
    margin: 5,
    resizeMode: 'cover'
  },
});
