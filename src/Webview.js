import * as React from 'react';
import {ActivityIndicator, BackHandler, Dimensions, View} from 'react-native';
import {WebView} from 'react-native-webview';
const {height, width} = Dimensions.get('window');
function LoadingIndicatorView() {
  return (
    <ActivityIndicator
      color="black"
      size="large"
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 200,
      }}
    />
  );
}
export default class Webview extends React.Component {
  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();

    this.state = {
      canGoBack: false,
    };
  }

  componentDidMount() {
    console.log('callded');
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.state.canGoBack) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
  };

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  }

  render() {
    return (
      <>
        <WebView
          originWhitelist={['*']}
          style={{marginTop: 1}}
          source={{uri: 'https://oakcreekonline.com/'}}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
          ref={this.WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        />
      </>
    );
  }
}
