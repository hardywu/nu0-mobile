/**
 * 公用 模态选择框
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
import Constant  from '../../public/constant';
import utils from '../../public/utils';

import mStyles from '../../public/common_style';
import styles from './Modal_Select_Style';

export default class ModalSelect extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            options,
            onOptionsRelease,
            onModalWrapRelease
        } = this.props;
        let optionsDOM = options.selectOptions.map((item, index) => {
            return (
                <View
                    style={styles.optionsItem}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => onOptionsRelease(evt, item)}
                >
                    <Text style={[
                        styles.optionsItemText,
                        options.value.code === item.code ? mStyles.mBlueColor : ''
                    ]}>
                        {item.name}
                    </Text>
                </View>
            )
        });
        return (
            <Modal
                visible={options.isShow ? true : false}
                animationType='none'
                presentationStyle='overFullScreen'
                transparent={true}
                onRequestClose={() => false}
            >
                <View
                    style={{flex: 1, backgroundColor: 'rgba(0,0,0,.6)'}}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => onModalWrapRelease(evt)}
                >
                    <ScrollView
                        style={styles.optionsWrap}
                    >
                        {optionsDOM}
                        {/* <View style={styles.optionsItem}>
                            <Text style={styles.optionsItemText}>1</Text>
                        </View> */}
                    </ScrollView>
                </View>
            </Modal>
        );
    }
}