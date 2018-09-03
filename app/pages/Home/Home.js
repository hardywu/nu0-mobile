/**
 *首页
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import styles from './Home_Style'

export default class Home extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor='#fff' animated={true} barStyle='dark-content'/>
                <View style={styles.userContainer}>
                    <View style={[styles.userContainerCenter, styles.plr10]}>
                        <Image 
                            style={{width: 50, height: 50}}
                            source={require('../../static/imgs/user_default.png')}
                        />
                        <Text>17922764886</Text>
                    </View>
                </View>
                <ScrollView
                    style={styles.mainContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={{height: 1000}}>这是中间的滚动页面   (flex: 1)</Text>
                    <Text>页面展示在这个组件中</Text>
                </ScrollView>
            </View>
        );
    }
}