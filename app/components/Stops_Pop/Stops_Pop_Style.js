import Constant from '../../public/constant';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },

    rowItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    rowItemKey: {
        fontSize: 13,
        color: Constant.DEFAULT_FONT_COLOR
    },

    rowItemVal: {
        marginLeft: 6,
        fontSize: 13,
        color: Constant.GRAY_COLOR
    },

    priceBtnWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20
    },

    priceBtnText: {
        fontSize: 13,
        color: Constant.ACTIVE_COLOR
    },

    ASInputWrap: {
        flex: 0.8
    },

    confirmBtnBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '46%',
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderRadius: 4
    },

    confirmBtnText: {
        fontSize: 14
    },
    
    label: {
        flexDirection: 'row',
        flex: 0.4,
        fontSize: 13,
        color: Constant.DEFAULT_FONT_COLOR
    },

    textBtn: {
        fontSize: 13,
        color: Constant.DEFAULT_FONT_COLOR
    }
});