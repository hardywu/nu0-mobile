/**
 * 公用 头部
 */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StatusBar,
    ScrollView,
    Image,
    Animated,
    Easing,
    FlatList,
    LayoutAnimation,
    Modal
} from 'react-native';

import mStyles from '../../public/common_style';
import styles from './Header_Style';

import goBackIcon from '../../static/imgs/go_back.png'; //后退按钮

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            title,
            onGoBackRelease
        } = this.props;

        return (
            <View style={styles.header}>
                <View style={[styles.headerCenterContent, mStyles.mCenterContent]}>
                    <Image
                        style={styles.goBackIcon}
                        source={goBackIcon}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => onGoBackRelease(evt)}
                    />
                    <Text style={styles.headTitle}>{title}</Text>
                </View>
            </View>
        );
    }
}

Header.defaultProps = {
    title: 'title'
}