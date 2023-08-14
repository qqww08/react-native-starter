import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstScreen from '@screens/FirstScreen';
import SettingsScreen from '@screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="First"
        component={FirstScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
