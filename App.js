import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/GlobalContext';

import SplashScreen from './src/authFlow/screens/SplashScreen';
import CategoriesScreens from './src/marketPlaceFlow/screens/CategoriesScreens';

const Stack = createStackNavigator();

export default function App() {

  return(
    <Provider>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} translucent={false} backgroundColor={"#FFF"} />
        <Stack.Navigator initialRouteName="SplashScreen" headerMode={null}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="CategoriesScreens" component={CategoriesScreens} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
