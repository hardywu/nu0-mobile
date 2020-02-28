/**
 * 公用组件 底部导航栏
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home/Home';
import Quotation from '../../pages/Quotation/Quotation';
import Pricing from '../../pages/Pricing/Pricing';
import French from '../../pages/French/French';
import Contract from '../../pages/Contract/Contract';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export function MainTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeTintColor="#3075ef"
      inactiveTintColor="#b5b5b7"
      labeled={true}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Quotation"
        component={Quotation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="bar-graph" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="French"
        component={French}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="dollar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pricing"
        component={Pricing}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bitcoin" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contract"
        component={Contract}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="layers" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
