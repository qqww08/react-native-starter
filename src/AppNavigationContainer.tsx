import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {linking} from '@resources/linking';
import HomeScreen from '@screens/HomeScreen';
import WebviewScreen from '@screens/WebviewScreen';
import {Text} from 'react-native';

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="View"
          component={WebviewScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
