import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootNav from './public/router';
import { Provider } from 'react-redux';
import createStore from './store/store';

const store = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </Provider>
  );
}
