import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const WebviewScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        source={{html: '<h1>Hello world1</h1>'}}
      />
    </SafeAreaView>
  );
};

export default WebviewScreen;
