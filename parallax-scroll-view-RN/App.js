import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import ImageSwiper from './components/ImageSwiper';

const { width, height } = Dimensions.get('window');
const HEADER_HEIGHT = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickyHeader: {
    height: HEADER_HEIGHT,
    alignItems: 'center', 
    
    backgroundColor: 'white', justifyContent: 'center'
  },
  fixedHeader: {
    position: 'absolute',
    top: 0,
    right: 20,
    backgroundColor: 'transparent'
  },
  foreground: {
    height: 350, 
    width: width, 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
  
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Title' }
    
  }
  

  render() {
    return (
      <ParallaxScrollView
        backgroundColor="transparent"
        contentBackgroundColor="#EAF2F8"
        fadeOutForeground={true}
        parallaxHeaderHeight={300}
        stickyHeaderHeight={HEADER_HEIGHT}
        renderStickyHeader={() => (
          <View style={styles.stickyHeader}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.state.title}</Text>
          </View>
        )}
        renderFixedHeader={() => (
          <View style={styles.fixedHeader}>
            <TouchableOpacity onPress={this._onPressButton} style={{marginTop: 10}}>
              <Image
                style={{height: 40, width: 80}}
                source={require('./assets/up.png')}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
        )}
        renderForeground={() => (
         <View style={styles.foreground}>
            {/* <Image source={require('./assets/scenery-1.jpg')} style={{height: 350, width: '100%'}} /> */}
            <ImageSwiper />
          </View>
        )}>
        <View style={{ height: 500, paddingTop: HEADER_HEIGHT, paddingHorizontal: 20 }}>
          <Text style={{fontSize: 16}}>{this.state.title}</Text>
          <Text style={{}}>Scroll me</Text>
        </View>
      </ParallaxScrollView>
    );
  }
}
