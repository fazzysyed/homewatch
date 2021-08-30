/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  Text,
  StatusBar,
  Dimensions,
  BackHandler,
  Platform,
} from 'react-native';
import WebView from './src/Webview';
import WebViewIos from './src/WebViewIos';
import Splash from './src/Splash';
import Main from './src/Main';
import Website from './src/Website';
import Contact from './src/Contact';
import News from './src/News';
import Notices from './src/Notices';
import Register from './src/Register';
import Inspector from './src/Inspector';
import Magazine from './src/Login';

const STACK = createStackNavigator();
function MyStack() {
  return (
    <STACK.Navigator>
      {Platform.OS === 'android' ? (
        <>
          <STACK.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Webview"
            component={WebViewIos}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="News"
            component={News}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Website"
            component={Website}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Contact"
            component={Contact}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Notices"
            component={Notices}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Login"
            component={Magazine}
            options={{headerShown: false}}
          />
          <STACK.Screen
            name="Inspector"
            component={Inspector}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <STACK.Screen
          name="Webios"
          component={WebViewIos}
          options={{headerShown: false}}
        />
      )}
    </STACK.Navigator>
  );
}

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

export default App;
