
import Constant from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#f8f8f8'
    },

    mainContainer: {
        flex: 1
    },
    
    rechargeWrap: {
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: '#fff'
    },

    rechargeImgWrap: {
        alignItems: 'center',
        width: '100%'
    },

    rechargeImg: {
        width: 130,
        height: 130,
        resizeMode: 'contain'
    },

    rechargeBtn: {
        alignItems: 'center',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: Constant.ACTIVE_COLOR,
        borderRadius: 4,
    },

    rechargeBtnText: {
        fontSize: 16,
        color: '#fff'
    },

    rechargeUrlTitle: {
        fontSize: 13,
        color: '#666'
    },

    rechargeUrl: {
        fontSize: 14,
        color: Constant.DEFAULT_FONT_COLOR
    },

    noticeTitle: {
        fontSize: 12,
        color: Constant.DEFAULT_FONT_COLOR
    },

    noticeCont: {
        fontSize: 12,
        color: Constant.YELLOW_COLOR
    }
});