import Contract from '../../../../public/constant';
import {
    StyleSheet,
    Platform
} from 'react-native';

let formSelectStyle = (() => {
    if(Platform.OS === "ios") {
        return { zIndex: 9 }
    } else {
        return {}
    }
})()

export default styles = StyleSheet.create({
    mt12: {
        marginTop: 12
    },

    fromItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    fromItemNotice: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    fromItemNoticeText: {
        fontSize: 13
    },

    fromItemNoticeName: {
        color: '#999'
    },

    fromItemNoticeVal: {
        color: Contract.DEFAULT_FONT_COLOR
    },

    inputInline1: {
        width: '100%'
    },

    inputInline2: {
        width: '48%'
    },

    inputInline3: {
        width: '30%'
    },

    formSelect: formSelectStyle,

    formSelectMain: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    formSelectResult: {
        fontSize: 14,
        color: Contract.DEFAULT_FONT_COLOR
    },

    formSelectResultArrow: {
        width: 14,
        height: 14,
        marginLeft: 8,
        resizeMode: 'contain'
    },

    formSelectOptions: {
        position: 'absolute',
        top: 24,
        width: '100%'
    }
});