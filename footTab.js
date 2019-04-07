import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,Button, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';


class FootTab  extends React.Component {
    goHome(){
        this.props.navigation.push('HomePost')
     }
    goExplore(){
        this.props.navigation.push('ExploreDestination')
     }
     goProfile(){
        this.props.navigation.push('ProfileMain')
     }
    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View style={styles.footTab}>
                <View style={{flex: 1, alignItems: 'center'}} >
                    <MaterialIcons name="home" size={44} onPress={this.goHome.bind(this)}/>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <MaterialIcons name="search" size={44} onPress={this.goExplore.bind(this)}/>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <MaterialIcons name="person" size={44} onPress={this.goProfile.bind(this)}/>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <MaterialIcons name="add" size={44} />
                </View>
            </View>
        );
    }
}
export default withNavigation(FootTab);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    footTab: {
      flexDirection: 'row',
      alignItems: 'center',
      bottom: 0,
      margin: 5,
    }
  
  
  });
