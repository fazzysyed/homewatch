import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    state = {
      firstLaunch: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Main');
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
                  source={{uri:"https://countyhomewatch.com/wp-content/uploads/2021/08/county-home-watch-logo-1.png"}}
   
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 300,
    height,
  },
});
