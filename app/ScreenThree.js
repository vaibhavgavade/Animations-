import * as React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import AutoScrolling from 'react-native-auto-scrolling';

const App = () => {
  return (
    <View style={styles.container}>
      <AutoScrolling style={styles.scrolling1}>
        <Image
          style={styles.image}
          delay={0}
          duration={6000}
          source={require('../app/asset/WelcV.jpg')}
        />
      </AutoScrolling>
      <AutoScrolling style={styles.scrolling2} endPadding={50}>
        <Text style={styles.welcome}>MERRY CHRISTMAS AND HAPPY NEW YEAR</Text>
      </AutoScrolling>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 200,
    height: 200,
  },
  scrolling1: {
    width: 400,
    padding: 10,
    marginBottom: 10,
  },
  scrolling2: {
    backgroundColor: 'red',
    width: 400,
    padding: 10,
    marginBottom: 10,
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});
