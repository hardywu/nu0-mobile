/**
 * 币种选择页
 */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StatusBar,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import Constant from '../../public/constant';
import Header from '../../components/Header/Header';
import ArcBtn from '../../components/Arc_Btn/Arc_Btn';
import ModalSelect from '../../components/Modal_Select/Modal_Select';
import EmptyTopBar from '../../components/Empty_Top_Bar/Empty_Top_Bar';
import EmptyBottomBar from '../../components/Empty_Bottom_Bar/Empty_Bottom_Bar';

import mStyles from '../../public/common_style';
import styles from './Cur_Selection_Style';

import searchIcon from '../../static/imgs/search.png'; //箭头图标
import selectedIcon from '../../static/imgs/selected_2.png'; //箭头图标

export default class CurSelection extends Component {
    constructor(props) {
        super(props);
    }

    //处理 返回按钮 释放事件
    handleGoBackRelease = evt => {
        this.props.navigation.goBack();
    }

    handleItemRelease = evt => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={[mStyles.mFlex1, mStyles.mSearchSelectionWrap]}>
                <EmptyTopBar backgroundColor='#fff'/>
                <Header
                    title='币种选择'
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
                    <ScrollView
                        style={mStyles.mSearchSelectionListWrap}
                    >
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                                <Image style={mStyles.mSearchSelectionListItemSelectedIcon} source={selectedIcon}/>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                        <View
                            style={mStyles.mSearchSelectionListItem}
                            onStartShouldSetResponder={() => true}
                            onResponderRelease={evt => this.handleItemRelease(evt)}
                        >
                            <View style={[mStyles.mCenterContent, mStyles.mSearchSelectionListItemCenterContent]}>
                                <Text style={mStyles.mSearchSelectionListItemText}>BTC</Text>
                            </View>
                        </View>
                    </ScrollView>
                    {/* 列表结束 */}
                </View>
                <EmptyBottomBar backgroundColor={Constant.M_BACKGROUND_COLOR}/>
            </View>
        );
    }
}