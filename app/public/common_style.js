import {
    StyleSheet
} from 'react-native'
import Contract from './constant'

export default mStyles = StyleSheet.create({
    mt10: {
        marginTop: 10
    },

    mHide: {
        display: 'none'
    },

    mFlex: {
        display: 'flex'
    },

    mFlex1: {
        flex: 1
    },

    mFontColor999: {
        color: '#999'
    },

    mBlackColor: {
        color: '#333'
    },

    mGrayColor: {
        color: Contract.GRAY_COLOR
    },

    mGrayBorderBottom: {
        borderBottomColor: Contract.GRAY_COLOR
    },

    mBlueColor: {
        color: Contract.BLUE_COLOR
    },

    mBlueBg: {
        backgroundColor: Contract.BLUE_COLOR
    },

    mBlueBorder: {
        borderColor: Contract.BLUE_COLOR
    },

    mBlueBorderBottom: {
        borderBottomColor: Contract.BLUE_COLOR
    },


    mRedColor: {
        color: Contract.RED_COLOR
    },

    mRedBg: {
        backgroundColor: Contract.RED_COLOR
    },

    mRedBorderBottom: {
        borderBottomColor: Contract.RED_COLOR
    },

    mGreenColor: {
        color: Contract.GREEN_COLOR
    },

    mGreenBorderLeft: {
        borderLeftColor: Contract.GREEN_COLOR
    },

    mGreenBorderBottom: {
        borderBottomColor: Contract.GREEN_COLOR
    },

    mGreenBg: {
        backgroundColor: Contract.GREEN_COLOR
    },

    mCenterContent: {
        marginLeft: 16,
        marginRight: 16
    },

    mForm: {
        backgroundColor: '#fff'
    },

    mFormCenterContent: {
        marginLeft: 16,
        marginRight: 16
    },

    mFormItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingTop: 6,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },

    mFormLabel: {
        width: 106,
        fontSize: 14,
        lineHeight: 30,
        color: Contract.DEFAULT_FONT_COLOR
    },

    mFormInput: {
        flex: 1,
        padding: 0,
        fontSize: 14,
        lineHeight: 30,
        color: Contract.DEFAULT_FONT_COLOR
    },

    mFormImgVfCode: {
        width: 80,
        height: 30,
        resizeMode: 'stretch'
    },

    mFormTextVfCode: {
        paddingLeft: 14,
        paddingRight: 14,
        fontSize: 14,
        lineHeight: 30,
        color: Contract.BLUE_COLOR
    }
});