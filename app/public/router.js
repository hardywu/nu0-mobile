import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { MainTabNav } from '../components/Main_Tab_Nav/Main_Tab_Nav'

const Router = createStackNavigator(
    {
        Main: {
            screen: MainTabNav,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'screen'
    }
);

export default Router;