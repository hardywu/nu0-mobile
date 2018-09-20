/**
 * 合约页 表单组件
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ScrollView,
    Image,
    Animated,
    Easing,
    FlatList,
    LayoutAnimation,
    Modal,
    Picker
} from 'react-native';
import Anim from '../../../../public/animation';
import UnitInput from '../../../../components/Unit_Input/Unit_Input';
import PercentBar from '../../../../components/Percent_Bar/Percent_Bar';
import ArcBtn from '../../../../components/Arc_Btn/Arc_Btn';
import { selectAnim, DcSelect } from '../../../../components/Dc_Select/Dc_Select'
import Check from './Check/Check';
import SelectBox from './Select_Box/Select_Box';

import Contract from '../../../../public/constant';
import mStyles from '../../../../public/common_style';
import styles from './Form_Style';

import arrowIcon from '../../../../static/imgs/arrow_gray.png'; //菜单按钮

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typeSelect: {
                isShow: false,
                value: {
                    code: 0,
                    name: '4位小数'
                },
                selectOptions: [
                    {
                        code: 0,
                        name: '4位小数'
                    }, {
                        code: 1,
                        name: '1位小数'
                    }, {
                        code: 2,
                        name: '百位小数'
                    }
                ]
            }
        }
    }

    setTypeSelect = (setTypeSelect, callback) => {
        this.setState({ typeSelect: typeSelect }, () => {
            if(callback) {
                callback();
            } else {
                return false;
            }
        });
    }

    handleTypeSelectRelease = (evt) => {
        const { typeSelect } = this.state;

        if(typeSelect.isShow) {
            selectAnim.scaleFadeOut().start(() => {
                typeSelect.isShow = false;
                this.setState({ typeSelect: typeSelect });
            });
        } else {
            typeSelect.isShow = true;
            this.setState({ typeSelect: typeSelect }, () => {
                selectAnim.scaleFadeIn().start();
            });
        }
    }

    render() {
        let {
            typeSelect
        } = this.state;

        return (
            <View style={styles.form}>
                <View style={styles.formSelect}>
                    <View
                        style={styles.formSelectMain}
                        onStartShouldSetResponder={() => true}
                        onResponderRelease={evt => this.handleTypeSelectRelease(evt)}
                    >
                        <Text style={styles.formSelectResult}>限价单</Text>
                        <Image style={styles.formSelectResultArrow} source={arrowIcon}></Image>
                    </View>
                    <DcSelect options={typeSelect} setOptions={this.setTypeSelect}/>
                </View>
                <View style={styles.mt12}>
                    <UnitInput />
                </View>
                <View style={styles.mt12}>
                    <Check />
                </View>
                <View style={styles.mt12}>
                    <SelectBox />
                </View>
            </View>
        )
    }
}