/**
 * 公用 下拉框
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
import Anim from '../../public/animation';
import utils from '../../public/utils';

import mStyles from '../../public/common_style';
import styles from './Dc_Select_Style';

//select显示和隐藏的动画
export class SelectAnim {
    constructor() {
        this.style = {
            opacity: new Animated.Value(0),
            scale: new Animated.Value(0.92)
        }
    }

    //显示
    scaleFadeIn = () => {
        return (
            Anim.parallel([
                Anim.timing(this.style.opacity, 1, 100, Easing.ease),
                Anim.timing(this.style.scale, 1, 100, Easing.ease),
            ])
        )
    }

    //隐藏
    scaleFadeOut = () => {
        return (
            Anim.parallel([
                Anim.timing(this.style.opacity, 0, 100, Easing.ease),
                Anim.timing(this.style.scale, .92, 100, Easing.ease),
            ])
        );
    }
}

export class DcSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: {
                top: null,
                left: null,
                width: null
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        let { selectHeaderRef } = nextProps;
        let { position } = this.state;
        //根据下拉框结果栏元素的位置和宽高，计算下拉框选项的位置
        utils.layout(selectHeaderRef).then((data) => {
            position.top = data.pageY + data.height + 4;
            position.left = data.pageX;
            position.width = data.width;
            this.setState({ position: position });
        });
    }

    render() {
        const {
            options,
            onOptionsRelease,
            dcStyle,
            onWrapRelease
        } = this.props
        let { position } = this.state;
        let selectOptionsDom = options.selectOptions.map((item, index) => {
            return (
                <Text
                    style={[
                        styles.dcSelectOptionsItem,
                        options.value.code === item.code ? mStyles.mBlueColor : ''
                    ]}
                    key={index}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={() => onOptionsRelease(item)}
                >
                    {item.name}
                </Text>
            )
        });
        return (
            <Modal
                visible={options.isShow && position.width ? true : false}
                animationType='none'
                presentationStyle='overFullScreen'
                transparent={true}
                onRequestClose={() => false}
            >
                <View
                    style={{flex: 1, backgroundColor: 'rgba(0,0,0,0)'}}
                    onStartShouldSetResponder={() => true}
                    onResponderRelease={evt => onWrapRelease(evt)}
                >
                    <Animated.View style={[
                        styles.dcSelectOptions,
                        {
                            display: options.isShow ? 'flex' : 'none',
                            top: position.top,
                            left: position.left,
                            width: position.width,
                            opacity: dcStyle.opacity,
                            transform: [
                                {scale: dcStyle.scale}
                            ]
                        }
                    ]}>
                        {selectOptionsDom}
                        {/* <Text style={styles.dcSelectOptionsItem}>选项1</Text>
                        <Text style={styles.dcSelectOptionsItem}>选项2</Text>
                        <Text style={styles.dcSelectOptionsItem}>选项3</Text> */}
                    </Animated.View >
                </View>
            </Modal>
        );
    }
}