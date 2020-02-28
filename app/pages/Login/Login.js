/**
 * 登录页
 */
import React, { Component } from 'react';
import { Text, TextInput, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import Constant from '../../public/constant';
import Toast from 'react-native-root-toast';
import utils from '../../public/utils';
import api from '../../public/api';
import * as userInfoAction from '../../actions/user_info';
import mStyles from '../../public/common_style';
import styles from './Login_Style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //登录类型tab数据
      loginTab: [
        {
          code: 0,
          name: '手机号',
          isActive: true,
        },
        {
          code: 1,
          name: '邮箱',
          isActive: false,
        },
        {
          code: 2,
          name: '子账户',
          isActive: false,
        },
      ],
      //邮箱登录
      email: {
        acc: 'admin@barong.io', //账号
        pw: '0lDHd9ufs9t@', //密码
      },
    };
  }

  componentDidMount() {}

  checkLoginTabActiveIndex = () => {
    let { loginTab } = this.state;
    for (let i = 0; i < loginTab.length; i++) {
      if (loginTab[i].isActive === true) {
        return i;
      }
    }
  };

  //处理 关闭按钮 释放事件
  handleCloseRelease = evt => {
    const { navigation } = this.props;
    // navigation.navigate('Main'); //回到主页面
    navigation.goBack();
  };

  //处理 注册账号按钮 释放事件
  handleRegisterRelease = evt => {
    const { navigate } = this.props.navigation;
    navigate('Register'); //跳转到注册页
  };

  // 处理 忘记密码按钮 释放事件
  handleForgetPasswordRelease = evt => {
    const { navigate } = this.props.navigation;
    navigate('ForgetPassword'); //跳转到注册页
  };

  //处理 登录类型tab 释放事件
  handleLoginTabRelease = (evt, index) => {
    let { loginTab } = this.state;
    for (let i = 0; i < loginTab.length; i++) {
      if (index === i) {
        loginTab[i].isActive = true;
      } else {
        loginTab[i].isActive = false;
      }
    }
    this.setState({ loginTab: loginTab });
  };

  //处理 登录按钮 释放事件
  handleLoginRelease = evt => {
    let { toast, email } = this.state;
    const { navigation } = this.props;
    let loginType = this.checkLoginTabActiveIndex();
    //判断登录类型（手机/邮箱等）
    if (loginType === 0) {
      //使用手机号登录
    } else if (loginType === 1) {
      //使用邮箱登录
      console.log('登录中...');
      toast = Toast.show('登录中...', {
        duration: Constant.TOAST_DURATION,
        position: Constant.TOAST_POSITION,
      });
      api
        .postV1Sessions({
          email: email.acc,
          password: email.pw,
          application_id: Constant.APPLICATION_ID,
        })
        .then(res => {
          console.log('获取token成功');
          Toast.hide(toast);
          toast = Toast.show('登录成功', {
            duration: Constant.TOAST_DURATION,
            position: Constant.TOAST_POSITION,
          });
          //将token存入本地
          let cookieStr = res.headers.map['set-cookie'][0];
          let token = utils.cookie.get(cookieStr, '_barong_session');
          utils.storage.save('token', token).then(data => {
            console.log('已保存token');
            navigation.navigate('Main'); //跳转到主页
          });
        })
        .catch(err => {
          //失败回调
          Toast.hide(toast);
          toast = Toast.show(err.msg, {
            duration: Constant.TOAST_DURATION,
            position: Constant.TOAST_POSITION,
          });
          console.log(`错误: ${err.msg}`);
        });
    }
  };

  //处理 邮箱账户 文本改变事件
  handleEmailAccChange = text => {
    let { email } = this.state;
    email.acc = text;
    this.setState({ email: email });
  };

  //处理 邮箱密码 文本改变事件
  handleEmailPwChange = text => {
    let { email } = this.state;
    email.pw = text;
    this.setState({ email: email });
  };

  render() {
    let { toast, loginTab, email } = this.state;
    let loginTabActiveIndex = null;
    let loginTabDOM = loginTab.map((item, index) => {
      if (item.isActive) {
        loginTabActiveIndex = index;
      }
      return (
        <View
          style={[
            styles.bodyTabItem,
            item.isActive ? styles.bodyTabItemActive : '',
          ]}
          key={index}
          onStartShouldSetResponder={() => true}
          onResponderRelease={evt => this.handleLoginTabRelease(evt, index)}>
          <Text
            style={[
              styles.bodyTabItemText,
              item.isActive ? styles.bodyTabItemTextActive : '',
            ]}>
            {item.name}
          </Text>
        </View>
      );
    });
    return (
      <SafeAreaView style={[mStyles.mFlex1, styles.loginWrap]}>
        <View style={[mStyles.mCenterContent, styles.bodyCenterContent]}>
          <Text style={styles.bodyTitle}>登录</Text>
          <View style={styles.bodyTab}>
            {loginTabDOM}
            {/* <View style={[styles.bodyTabItem, styles.bodyTabItemActive]}>
                                    <Text style={[styles.bodyTabItemText, styles.bodyTabItemTextActive]}>手机号</Text>
                                </View>
                                <View style={styles.bodyTabItem}>
                                    <Text style={styles.bodyTabItemText}>邮箱</Text>
                                </View>
                                <View style={styles.bodyTabItem}>
                                    <Text style={styles.bodyTabItemText}>子账户</Text>
                                </View> */}
          </View>
          <View style={styles.bodyForm}>
            <View
              style={[
                styles.bodyFormItem,
                { display: loginTabActiveIndex === 0 ? 'flex' : 'none' },
              ]}>
              <View style={styles.bodyFormItemInput}>
                <TextInput
                  style={styles.input}
                  placeholder="手机号"
                  placeholderTextColor="#a7d4fe"
                  underlineColorAndroid="transparent"
                  multiline={true}
                />
              </View>
              <View style={styles.bodyFormItemInput}>
                <TextInput
                  style={styles.input}
                  placeholder="密码"
                  placeholderTextColor="#a7d4fe"
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.bodyFormItemLogin}>
                <View
                  style={styles.loginBtn}
                  onStartShouldSetResponder={() => true}
                  onResponderRelease={evt => this.handleLoginRelease(evt)}>
                  <Text style={styles.loginBtnText}>登录</Text>
                </View>
                <Text
                  style={styles.forgetPasswordText}
                  onStartShouldSetResponder={() => true}
                  onResponderRelease={evt =>
                    this.handleForgetPasswordRelease(evt)
                  }>
                  忘记密码
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.bodyFormItem,
                { display: loginTabActiveIndex === 1 ? 'flex' : 'none' },
              ]}>
              <View style={styles.bodyFormItemInput}>
                <TextInput
                  style={styles.input}
                  placeholder="邮箱"
                  placeholderTextColor="#a7d4fe"
                  underlineColorAndroid="transparent"
                  multiline={true}
                  defaultValue={email.acc}
                  onChangeText={text => this.handleEmailAccChange(text)}
                />
              </View>
              <View style={styles.bodyFormItemInput}>
                <TextInput
                  style={styles.input}
                  placeholder="密码"
                  placeholderTextColor="#a7d4fe"
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  defaultValue={email.pw}
                  onChangeText={text => this.handleEmailPwChange(text)}
                />
              </View>
              <View style={styles.bodyFormItemLogin}>
                <View
                  style={styles.loginBtn}
                  onStartShouldSetResponder={() => true}
                  onResponderRelease={evt => this.handleLoginRelease(evt)}>
                  <Text style={styles.loginBtnText}>登录</Text>
                </View>
                <Text
                  style={styles.forgetPasswordText}
                  onStartShouldSetResponder={() => true}
                  onResponderRelease={evt =>
                    this.handleForgetPasswordRelease(evt)
                  }>
                  忘记密码
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.bodyFormItem,
                { display: loginTabActiveIndex === 2 ? 'flex' : 'none' },
              ]}>
              <View style={styles.bodyFormItemInput}>
                <TextInput
                  style={styles.input}
                  placeholder="子账户"
                  placeholderTextColor="#a7d4fe"
                  underlineColorAndroid="transparent"
                  multiline={true}
                />
              </View>
              <View style={styles.bodyFormItemInput}>
                <TextInput
                  style={styles.input}
                  placeholder="密码"
                  placeholderTextColor="#a7d4fe"
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.bodyFormItemLogin}>
                <View
                  style={styles.loginBtn}
                  onStartShouldSetResponder={() => true}
                  onResponderRelease={evt => this.handleLoginRelease(evt)}>
                  <Text style={styles.loginBtnText}>登录</Text>
                </View>
                <Text
                  style={styles.forgetPasswordText}
                  onStartShouldSetResponder={() => true}
                  onResponderRelease={evt =>
                    this.handleForgetPasswordRelease(evt)
                  }>
                  忘记密码
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  state => ({
    userInfo: state.userInfo,
    token: state.token,
  }),
  dispatch => ({
    setUserInfo: data => dispatch(userInfoAction.setUserInfo(data)),
    delUserInfo: data => dispatch(userInfoAction.delUserInfo(data)),
    setToken: data => dispatch(tokenAction.setToken(data)),
    delToken: () => dispatch(tokenAction.delToken()),
  }),
)(Login);
