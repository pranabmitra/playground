import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
let secondSectionY;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          style={{ marginVertical: 40 }} 
          ref={this.refScrollView}
          onScroll={this.onScroll}
        >
          <Text style={{ fontSize: 20, marginBottom: 30 }}>
            A lot of text here...
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but alsoLorem Ipsum used since the 1500s is reproduced 
            below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" 
            by Cicero are also reproduced in their exact original form, accompanied by English versions 
            from the 1914 translation by H. Rackham.
          </Text>


          <View onLayout={(e)=> {
              secondSectionY = e.nativeEvent.layout.y;
          }}>
            <Text>
                This is another section... 
                The European languages are members of the same family. Their separate existence is a myth. 
                For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ 
                in their grammar, their pronunciation and their most common words. Everyone realizes why 
                a new common language would be desirable: one could refuse to pay expensive translators. 
                To achieve this, it would be necessary to have uniform grammar, pronunciation and more 
                common words. If several languages coalesce, the grammar of the resulting language is 
                more simple and regular than that of the individual languages. The new common language 
                will be more simple and regular than the existing European languages. It will be as simple 
                as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified 
                English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages 
                are members of the same family. Their separate existence is a myth. For science, music, sport, etc, 
                Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and 
                their most common words. Everyone realizes why a new common language would be desirable: one could 
                refuse to pay expensive translators.
            </Text>
          </View>

        </ScrollView>

        <Button title="Go to Another Section" onPress={this.onPressGotoSection} />
      </View>
    );
  }

  componentDidMount() {
    this.scrollY = 0;
  }

  onScroll = ({ nativeEvent }) => {
    const { contentOffset } = nativeEvent;
    this.scrollY = contentOffset.y;
    //alert(contentOffset.y + "--" + (secondSectionY - height));
    if (contentOffset.y >= secondSectionY) {
      console.log('Now we are at that another view section.');
    }
  }

  refScrollView = (scrollView) => {
    this.scrollView = scrollView;
  }

  onPressGotoSection = () => {
    this.scrollView.scrollTo({ y: secondSectionY, animated: true});

    /* To scroll by 100px */
    // const newScrollY = this.scrollY + 100;
    // this.scrollView.scrollTo({ y: newScrollY, animated: true });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
