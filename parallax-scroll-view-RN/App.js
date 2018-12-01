import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Universe' }
    
  }
  

  render() {
    // return (
    //   <View style={styles.container}>
    //     <Text>Hi ... I am running...</Text>
    //   </View>
    // );
    return (
      <ParallaxScrollView
        backgroundColor="transparent"
        contentBackgroundColor="pink"
        fadeOutForeground={true}
        parallaxHeaderHeight={300}
        //stickyHeaderHeight={0}
        renderStickyHeader={() => (
          <View style={{ height: 60,  alignItems: 'center', backgroundColor: '#b0c4de', justifyContent: 'center' }}>
            <Text>{this.state.title}</Text>
          </View>
        )}
        renderFixedHeader={() => (
          <View style={{ height: 50, width: '100%', flex: 1, justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'transparant' }}>
            <Image source={require('./assets/up.png')} style={{height: 40, width: 40, right: 20}} />
          </View>
        )}
        renderForeground={() => (
         <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello World!</Text>
          </View>
        )}>
        <View style={{ height: 500 }}>
          <Text>Scroll me</Text>
        </View>
      </ParallaxScrollView>
    );
  }
}
