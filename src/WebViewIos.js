import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import WebView from 'react-native-webview';

const WebViewIos = () => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const webviewRef = useRef(null);

  backButtonHandler = () => {
    console.log('Hello');
    if (webviewRef.current) webviewRef.current.goBack();
  };

  frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{uri: 'https://oakcreekonline.com/'}}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color="black"
              size="large"
              style={styles.flexContainer}
            />
          )}
          ref={webviewRef}
          onNavigationStateChange={(navState) => {
            setCanGoBack(navState.canGoBack);
            setCanGoForward(navState.canGoForward);
            setCurrentUrl(navState.url);
          }}
        />
        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={backButtonHandler}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={frontButtonHandler}>
            <Text style={styles.button}>Forward</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabBarContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eae1d0',
  },
  button: {
    color: 'black',
    fontSize: 16,
  },
});

export default WebViewIos;
