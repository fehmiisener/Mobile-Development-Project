import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './navigation_pages/HomeScreen';
import LoginScreen from './navigation_pages/LoginScreen';
import RegisterTask from './navigation_pages/RegisterTask';
import ViewTask from './navigation_pages/ViewTask';
import ViewAllTask from './navigation_pages/ViewAllTask';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Mobil Programlama | Kalıcı Veri Yönetimi',
            headerStyle: {
              backgroundColor: '#3838FA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Mobil Programlama | Kalıcı Veri Yönetimi',
            headerStyle: {
              backgroundColor: '#3838FA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewTask}
          options={{
            title: 'Task Görüntüle',
            headerStyle: {
              backgroundColor: '#3838FA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllTask}
          options={{
            title: 'Tüm Görevleri Görüntüle',
            headerStyle: {
              backgroundColor: '#3838FA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterTask}
          options={{
            title: 'Görevleri Kaydet',
            headerStyle: {
              backgroundColor: '#3838FA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
