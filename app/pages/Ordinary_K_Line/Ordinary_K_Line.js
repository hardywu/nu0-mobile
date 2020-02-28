/**
 * 不含买卖按钮的k线
 */
import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  WebView,
  Platform,
} from 'react-native';
import Constant from '../../public/constant';
import Header from '../../components/Header/Header';

import mStyles from '../../public/common_style';
import styles from './Ordinary_K_Line_Style';

import collectionNoIcon from '../../static/imgs/collection_no.png';
import collectionYesIcon from '../../static/imgs/collection_yes.png';

export default class OrdinaryKLine extends Component {
  constructor(props) {
    super(props);
  }

  //处理 返回按钮 释放事件
  handleGoBackRelease = evt => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={[mStyles.mFlex1, mStyles.mBackgroundColor]}>
        <Header
          title="行情"
          onGoBackRelease={evt => this.handleGoBackRelease(evt)}
        />
        <View style={styles.operationWrap}>
          <TouchableOpacity
            style={[styles.btn, mStyles.mGreenBg]}
            activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
            <Text style={styles.btnText}>买入</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, mStyles.mRedBg]}
            activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
            <Text style={styles.btnText}>卖出</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.collectionWrap]}
            activeOpacity={Constant.TOUCHABLE_OPACITY_ACTIVE_OPACITY}>
            <Image style={styles.collectionIcon} source={collectionYesIcon} />
            <Text style={styles.collectionText}>已添加</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
