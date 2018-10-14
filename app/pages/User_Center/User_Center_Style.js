import Constant from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#f8f8f8'
    },

    userWrap: {
        width: '100%',
        height: 80,
        backgroundColor: '#fff'
    },

    userCenterContent: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
    },

    userImg: {
        width: 40,
        height: 40,
        marginRight: 14,
        resizeMode: 'contain'
    },

    userName: {
        fontSize: 14,
        color: Constant.DEFAULT_FONT_COLOR
    },

    logoutWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: '#fff'
    },

    logoutText: {
        flex: 1,
        fontSize: 14,
        lineHeight: 30,
        color: '#b5b5b7',
        fontSize: 15,
        textAlign: 'center'
    }
});