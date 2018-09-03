/**
 *行情页
 */
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

const labelName = '法币';

export default class French extends Component {
    static navigationOptions = {
        tabBarLabel: labelName,
    };

    render() {
        return (
            <View>
                <Text>这是法币页</Text>
            </View>
        );
    }
}