import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  Dimensions,
  Text
} from 'react-native'
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');

const styles = {
  container: {
    flex: 1, 
    width: width   
  },
  wrapper: {
    // backgroundColor: '#f00'
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },
  image: {
    width,
    height: '100%',
  },
  dot: {  
    width: 13, 
    height: 13, 
    borderRadius: 7, 
    marginLeft: 7, 
    marginRight: 7
  },
}

export default class ImageSwiper extends Component {
  render () {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <Swiper style={styles.wrapper} 
                dot={<View style={[styles.dot, {backgroundColor: '#EAECEE'}]} />}
                activeDot={<View style={[styles.dot, {backgroundColor: '#5DADE2'}]} />}
                paginationStyle={{
                    bottom: 70
                }}
                loop={true}>
                <View style={styles.slide}>
                    <Image
                        style={styles.image}
                        source={require('../assets/scenery-1.jpg')}
                        resizeMode='cover'
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        style={styles.image}
                        source={require('../assets/scenery-2.jpg')}
                        resizeMode='cover'
                    />
                </View>
            </Swiper>
        </View>
    )
  }
}
