import {
    Platform,
    Dimensions
} from 'react-native';

export default Constant = {
    ACTIVE_COLOR: '#3075ef', //激活状态的颜色
    DEFAULT_FONT_COLOR: '#333', //默认字体颜色
    GRAY_COLOR: '#b5b5b7', //常用灰色
    BLUE_COLOR: '#3075ef', //常用蓝色
    RED_COLOR: '#ef5f53', //常用红色
    GREEN_COLOR: '#4db872', //常用绿色
    YELLOW_COLOR: '#ff9e08', //常用黄色
    TOUCHABLE_HIGHLIGHT_UNDERLAY_COLOR: '#e8e8e8', //TouchableHighlight点击时的底色
    TOUCHABLE_OPACITY_ACTIVE_OPACITY: 0.7, //TouchableOpacity点击时的透明度
    M_BACKGROUND_COLOR: '#f8f8f8',
    IPHONEX_WIDTH: 375, //iphonex屏幕宽度
    IPHONEX_HEIGHT: 812, //iphonex屏幕高度
    SCREEN_WIDTH: Dimensions.get('window').width, //实际屏幕宽度
    SCREEN_HEIGHT: Dimensions.get('window').height, //实际屏幕高度
    TOAST_POSITION: -80, //toast显示位置
    TOAST_DURATION: 1000, //toast显示时间
    APPLICATION_ID: 'a68be319fca51caca60eed5711226e568bd1c1d13ff452b945515f1a6ffbaca4', //appid
}