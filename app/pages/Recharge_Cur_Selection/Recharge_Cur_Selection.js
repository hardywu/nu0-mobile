/**
 * 充值币种选择页
 */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StatusBar,
    ScrollView,
    Image,
    FlatList,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import Constant from '../../public/constant';
import Header from '../../components/Header/Header';
import * as rechargeCurAction from '../../actions/recharge_cur';

import mStyles from '../../public/common_style';
import styles from './Recharge_Cur_Selection_Style';

import searchIcon from '../../static/imgs/search.png'; //箭头图标
import selectedIcon from '../../static/imgs/selected_2.png'; //箭头图标

class RechargeCurSelection extends Component {
    constructor(props) {
        super(props);
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    //处理 币种选项 释放事件 
    handleItemPress = evt => {
        //FIXME: 这里要修改为正确的币种名字的币种code
        this.props.setRechargeCur({
            code: '12',
            name: '选择后的币种'
        });
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={[mStyles.mFlex1, mStyles.mSearchSelectionWrap]}>
                <Header
                    title='充值币种选择'
                    onGoBackRelease={evt => this.handleGoBackRelease(evt)}
                />
                <View style={mStyles.mSearchSelection}>
                    {/* 搜索栏开始 */}
                    <View style={mStyles.mSearchSelectionInputWrap}>
                        <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionInputCenterContent]}>
                            <Image style={mStyles.mSearchSelectionInputIcon} source={searchIcon}/>
                            <TextInput
                                style={mStyles.mSearchSelectionInput}
                                placeholder='搜索'
                                placeholderTextColor='#999a9b'
                                underlineColorAndroid='transparent'
                                multiline={false}
                            />
                        </View>
                    </View>
                    {/* 搜索栏结束 */}
                    {/* 列表开始 */}
                    <FlatList
                        style={mStyles.mSearchSelectionListWrap}
                        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, ]}
                        keyExtractor={(item, index) => String(index)}
                        renderItem={({item, index}) => (
                            <TouchableHighlight
                                underlayColor={Constant.TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR}
                                onPress={evt => this.handleItemPress(evt)}
                            >
                                <View style={mStyles.mSearchSelectionListItem}>
                                    <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                        <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                                        <Image style={mStyles.mSearchSelectionListItemSelectedIcon} source={selectedIcon}/>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )}
                    />
                    {/* 列表结束 */}
                </View>
            </View>
        );
    }
}

export default connect(
    (state) => ({
        rechargeCur: state.rechargeCur
    }),
    (dispatch) => ({
        setRechargeCur: data => dispatch(rechargeCurAction.setRechargeCur(data))
    })
)(RechargeCurSelection)