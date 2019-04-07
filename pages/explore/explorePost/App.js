import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PostThumbnail from './PostThumbnail';
import FootTab from '../../../footTab';

var {width, height} = Dimensions.get('window');


export default class ExplorePost extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      search: '',
      activeTab: '',
    };
  }

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
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchBox}>
            <MaterialIcons name="search" size={36}/>
            <TextInput onChangeText={ (search) => { this.setState({search})}}
              value={this.state.search}
              placeholder="search"
              style={styles.searchFrom}
            />
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
        <View style={styles.postContent}>
          {this._renderItem()}
          <PostThumbnail item={this.data[0]} double={true}/>
        </View>
        <FootTab></FootTab>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
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
  postContent:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  }

});
