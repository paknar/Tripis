import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,Button, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';


import SearchTravelplan from './ExploreSearchTravelplan';

export default class ExploreTravelPlan extends React.Component {

  
  
  render() {
    return (
      <View style={styles.Container}>
        <SearchTravelplan>

        </SearchTravelplan>
        <SearchTravelplan>

        </SearchTravelplan>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 24,
    flexDirection: 'column'
  },
  
  
});
