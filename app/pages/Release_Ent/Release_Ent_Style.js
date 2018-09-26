import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    // 头部开始
    head: {
        width: '100%',
        backgroundColor: '#fff'
    },

    headCenterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
    },

    goBackIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },

    headTitle: {
        fontSize: 15,
        color: Contract.DEFAULT_FONT_COLOR
    },

    headPrice: {
        fontSize: 12,
        color: '#2c3f5f'
    },
    // 头部结束

    // 导航开始
    nav: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e4e8',
        backgroundColor: '#fff'
    },

    navItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },

    navItemText: {
        fontSize: 13,
        lineHeight: 42,
        color: Contract.DEFAULT_FONT_COLOR
    },
    // 导航结束

    //主体内容开始
    body: {
        flex: 1,
        backgroundColor: '#f7f8fa'
    },

    thead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    theadText: {
        fontSize: 13,
        color: '#999'
    },

    tbody: {
        backgroundColor: '#fff'
    },

    tbodyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 46
    },

    tbodyRowBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },

    tbodyRowLeft: {
        justifyContent: 'center',
        width: 97,
        height: '100%'
    },

    tbodyRowRight: {
        flex: 1,
        justifyContent: 'center',
        height: '100%'
    },

    tbodyRowText: {
        fontSize: 14,
        color: Contract.DEFAULT_FONT_COLOR
    },

    tbodyRowInput: {
        width: '100%',
        height: '100%'
    },

    tbodySelect: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    tbodySelectlArrow: {
        width: 10,
        height: 10,
        resizeMode: 'contain'
    }
    //主体内容结束
});