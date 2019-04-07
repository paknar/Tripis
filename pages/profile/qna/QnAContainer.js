import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, FlatList } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import FootTab from '../../../footTab';
import QnA from './QnA';

export default class App extends React.Component {
  data = [
    require('../../../assets/icon.png'),
    require('../../../assets/icon.png'),
    require('../../../assets/icon.png'),
    require('../../../assets/icon.png'),
    require('../../../assets/icon.png'),
  ];
  _renderItem = () =>{
    return this.data.map(( item,index ) => {
      console.log(item);
      return ( 
        <PostThumbnail index={index} item={item} double = {index == 1 ? true : false}/>
      );
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>

              <View style={styles.main}>
                
                  <View style={styles.header}>
                    <AntDesign name="mail" size={40} color="black" style={{flex:6, padding: 10}}/>
                    <AntDesign name="setting" size={40} color="black" style={{flex:1, padding: 10}}/>
                  </View>

                
                  {/* <Image source={require('../../../assets/1.jpg')} style={styles.backgroundImage} /> */}
                  <View style={styles.profile}>
                    <View style={{flexDirection: 'row', flex:1}}>
                      <Text style={{flex:1}}></Text>
                      <Image
                        style={styles.pic}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                      />
                      <Text style={{flex:1}}></Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text >Nama Anda</Text>
                      <Text >Description??</Text>
                    </View>
                  </View>
                  <View style={styles.details}>
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                      <Text style={{flex:1, textAlign: 'center'}}>folower hubla</Text>
                      <Text style={{flex:1, textAlign: 'center'}}>folower</Text>
                      <Text style={{flex:1, textAlign: 'center'}}>folower</Text>
                      <Text style={{flex:1, textAlign: 'center'}}>folower</Text>
                      <Text style={{flex:1, textAlign: 'center'}}>folower</Text>
                    </View >
                      
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{flex:1, textAlign: 'center'}}>31</Text>
                      <Text style={{flex:1, textAlign: 'center'}}>31</Text>
                      <Text style={{flex:1, textAlign: 'center'}}>31</Text>
                      <Text style={{flex:1, textAlign: 'center'}}>31</Text>
                      <Text style={{flex:1, textAlign: 'center'}}>31</Text>
                    </View>
                  </View>
                
                
              </View>

              <View style={styles.about}>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>About</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor dictum feugiat. Phasellus pretium nisi id elementum aliquet. Nullam tristique fringilla mauris at placerat. Maecenas cursus eget dolor sit amet fermentum. Curabitur pharetra, erat nec hendrerit vehicula, nisl risus pretium nulla, malesuada tempus eros ex vel lorem. Phasellus nec ante dignissim, sollicitudin felis nec, viverra neque. Integer non neque vitae mauris gravida ultrices vitae eu augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</Text>
              </View>
              
              <View style={styles.prefered}>
                <Text style={[styles.tag, {backgroundColor: '#f00'}]}>Adventure</Text>
                <Text style={[styles.tag, {backgroundColor: '#0f0'}]}>Kentu</Text>
                <Text style={[styles.tag, {backgroundColor: '#00f'}]}>Ngewe</Text>
                <Text style={[styles.tag, {backgroundColor: '#f0f'}]}>Irvan</Text>
              </View>
              <Text style={{padding: 10, }}>Joined Since 2017</Text>
              <View style={{
                  borderBottomColor: '#ddd',
                  borderBottomWidth: 1,
                  marginHorizontal : 10,
                  marginBottom: 10
                }}
              />
              <View style={styles.profContent}>
                <View style={styles.tabs}>
                  <Text style={styles.tabItems} onPress={()=>navigate('ProfileMain')}>Post</Text>
                  <Text style={styles.tabItems} onPress={()=>navigate('qna')}>QnA</Text>
                  <Text style={styles.tabItems}>Activity</Text>
                </View>
                <View style={styles.Content}>
                  <QnA></QnA>
                  <QnA></QnA>
                </View>
        
                {/* <FlatList
                  data={[{key: 'a'}, {key: 'b'}]}
                  renderItem={({item}) =>
                    <View style={{flex: item.key == 'a' ? 1 : 2, backgroundColor: item.key == 'a' ? '#f00' : '#00f'}}>
                      <Text>test</Text>
                    </View>
                    
                    }
                /> */}
              </View>

          </View>
        </ScrollView>
        <FootTab></FootTab>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  main: {
    flex: 1,

  },
  header: {
    backgroundColor: '#fff',
    flexDirection: "row",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  backgroundImage: {
    resizeMode: "cover",
  },
  profile: {
    flex:3,
    alignItems: 'center',
    marginBottom: 10,
  },
  pic: {
    flex: 1.5,
    borderRadius: 75,
    marginBottom: 10,
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').height/4,
  },
  details: {
    flex :1,
    marginBottom: 10,
  },
  about : {
    flex: 2, 
    padding: 10
  },
  prefered: {
    flexDirection: 'row',

  },
  tag: {
    
    padding :7,
    margin: 3,
    borderRadius: 10,
  },
  profContent: {
    flexDirection: 'column'
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tabItems : {
    flex: 1,
    fontSize : 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  Content:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
