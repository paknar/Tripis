import React, { PureComponent } from 'react'
import { Image, Text, View, TouchableHighlight, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
// import kontol from ''
var { width, height } = Dimensions.get('window');

export default class PostThumbnail extends PureComponent{
    render(){
        return(
                <ImageBackground source={this.props.item} key={this.props.index} style={ this.props.double == true ? styles.doubleImage : styles.singleImage}>
                    <Image source={require('../../../assets/icon.png')} style={styles.profileImage}/>
                    <Ionicons name='md-heart' color='red' size={24}/>
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    singleImage:{
        width: (width)/3-2,
        height: (width)/3,
        marginBottom: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
    },
    doubleImage:{
        width: ((width)/3*2)-2,
        height: (width)/3,
        marginBottom: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
    },
    profileImage:{
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#fff',
    }

})