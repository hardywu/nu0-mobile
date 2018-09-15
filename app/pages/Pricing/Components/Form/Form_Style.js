import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    mt12: {
        marginTop: 12
    },

    form: {
        width: '100%'
    },

    //买入/卖出按钮开始
    formTypeBtn: {
        flexDirection: 'row',
        overflow: 'hidden',
        width: '100%',
        borderRadius: 4,
        backgroundColor: '#f7f8fa'
    },

    formTypeBtnText: {
        flex: 1,
        fontSize: 14,
        lineHeight: 36,
        textAlign: 'center',
        color: '#fff'
    },
    //买入/卖出按钮结束

    //下拉框开始
    formSelect: {
    },

    formSelectMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 6,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4
    },

    formSelectResult: {
        fontSize: 14,
        lineHeight: 24,
        color: Contract.DEFAULT_FONT_COLOR
    },

    formSelectResultArrow: {
        width: 14,
        height: 14,
        resizeMode: 'contain'
    },
    //下拉框结束

    // 估值开始
    formValuationText: {
        fontSize: 12,
        color: '#b5b5b7'
    },
    // 估值结束

    //可用开始
    formAbleWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    formAbleName: {
        marginRight: 10,
        fontSize: 12,
        color: '#9d9d9d'
    },

    formAbleVal: {
        fontSize: 12,
        color: Contract.DEFAULT_FONT_COLOR
    }
    //可用结束
});