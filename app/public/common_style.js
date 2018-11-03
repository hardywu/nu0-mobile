import {
    StyleSheet
} from 'react-native'
import Constant from './constant'

export default mStyles = StyleSheet.create({
    mt10: {
        marginTop: 10
    },

    mb10: {
        marginBottom: 10
    },

    mBackgroundColor: {
        backgroundColor: '#f8f8f8'
    },

    mJustifyContentFlexEnd: {
        justifyContent: 'flex-end'
    },

    mTALeft: {
        textAlign: 'left'
    },

    mTARight: {
        textAlign: 'right'
    },

    mTACenter: {
        textAlign: 'center'
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

    mWhiteColor: {
        color: '#fff'
    },

    mWhiteBg: {
        backgroundColor: '#fff'
    },

    mGrayColor: {
        color: Constant.GRAY_COLOR
    },

    mGrayBorder: {
        borderColor: Constant.GRAY_COLOR
    },

    mGrayBorderBottom: {
        borderBottomColor: Constant.GRAY_COLOR
    },

    mBlueColor: {
        color: Constant.BLUE_COLOR
    },

    mBlueBg: {
        backgroundColor: Constant.BLUE_COLOR
    },

    mBlueBorder: {
        borderColor: Constant.BLUE_COLOR
    },

    mBlueBorderBottom: {
        borderBottomColor: Constant.BLUE_COLOR
    },

    mBlueBorderLeft: {
        borderLeftColor: Constant.BLUE_COLOR
    },

    mRedColor: {
        color: Constant.RED_COLOR
    },

    mRedBg: {
        backgroundColor: Constant.RED_COLOR
    },

    mRedBorderBottom: {
        borderBottomColor: Constant.RED_COLOR
    },

    mGreenColor: {
        color: Constant.GREEN_COLOR
    },

    mGreenBorderLeft: {
        borderLeftColor: Constant.GREEN_COLOR
    },

    mGreenBorderBottom: {
        borderBottomColor: Constant.GREEN_COLOR
    },

    mGreenBg: {
        backgroundColor: Constant.GREEN_COLOR
    },

    mCenterContent: {
        marginLeft: 12,
        marginRight: 12
    },

    mForm: {
        backgroundColor: '#fff'
    },

    mFormCenterContent: {
        marginLeft: 12,
        marginRight: 12
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
        color: Constant.DEFAULT_FONT_COLOR
    },

    mFormValueText: {
        flex: 1,
        fontSize: 14,
        lineHeight: 30,
        textAlign: 'right',
        color: Constant.DEFAULT_FONT_COLOR
    },

    mFormInput: {
        flex: 1,
        padding: 0,
        fontSize: 14,
        lineHeight: 30,
        color: Constant.DEFAULT_FONT_COLOR
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
        color: Constant.BLUE_COLOR
    },

    mFormSelect: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    mFormSelectText: {
        flex: 1,
        fontSize: 14,
        color: Constant.DEFAULT_FONT_COLOR
    },

    mFormSelectTextRight: {
        flex: 1,
        paddingRight: 17,
        fontSize: 14,
        textAlign: 'right',
        color: '#666'
    },

    mFormSelectIcon: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        transform: [
            {rotate: '-90deg'}
        ]
    },

    mSearchSelection: {
        flex: 1
    },

    mSearchSelectionWrap: {
        backgroundColor: '#f7f8fa'
    },

    mSearchSelectionInputWrap: {
        justifyContent: 'center',
        width: '100%',
        height: 34,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    },

    mSearchSelectionInputCenterContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    mSearchSelectionInputIcon: {
        width: 14,
        height: 14,
        resizeMode: 'contain'
    },

    mSearchSelectionInput: {
        flex: 1,
        padding: 0,
        paddingLeft: 5,
        fontSize: 13
    },

    mSearchSelectionListWrap: {
        flex: 1
    },

    mSearchSelectionListItem: {
        backgroundColor: '#fff'
    },

    mSearchSelectionListItemCenterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e4e8',
    },

    mSearchSelectionListItemText: {
        fontSize: 12,
        color: Constant.DEFAULT_FONT_COLOR
    },
    
    mSearchSelectionListItemSelectedIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },

    mModalWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.7)'
    },

    mPopWrap: {
        width: 300,
        paddingBottom: 5,
        backgroundColor: '#fff'
    },

    mPopHead: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 28,
        paddingRight: 28,
        backgroundColor: Constant.ACTIVE_COLOR
    },

    mPopBody: {
        paddingTop: 10,
        paddingBottom: 5,
    },

    mPopFoot: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },

    mPopHeadText: {
        width: '100%',
        fontSize: 14,
        textAlign: 'center',
        color: '#fff'
    },

    mPopHeadClose: {
        position: 'absolute',
        top: 10,
        right: 8,
        width: 14,
        height: 14,
        resizeMode: 'contain'
    }
});