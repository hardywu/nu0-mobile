import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    // 头部开始
    header: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerCenterContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerMain: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerTitle: {
        fontSize: 18,
        color: Contract.DEFAULT_FONT_COLOR
    },

    headerSearch: {
        position: 'absolute',
        right: 40,
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },

    headerMenu: {
        position: 'absolute',
        right: 0,
        width: 24,
        height: 24,
        resizeMode: 'contain'
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
        fontSize: 16,
        lineHeight: 50,
        color: Contract.DEFAULT_FONT_COLOR
    },
    // 导航结束

    body: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },

    row: {
        flex: 1
    },

    // 交易页开始
    tradeHeader: {
        height: 40,
        backgroundColor: '#fff'
    },

    tradeHeaderCenterContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e4e8'
    },

    tradeHeaderSelect: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    tradeHeaderSelectText: {
        fontSize: 16,
        color: Contract.DEFAULT_FONT_COLOR
    },

    tradeHeaderSelectArrow: {
        width: 16,
        height: 16,
        marginLeft: 8,
        resizeMode: 'contain'
    },

    tradeHeaderQuo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    tradeHeaderQuoText: {
        fontSize: 16,
        color: Contract.DEFAULT_FONT_COLOR
    },

    tradeHeaderQuoIcon: {
        width: 16,
        height: 16,
        marginLeft: 8,
        resizeMode: 'contain'
    },

    tradeBody: {
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#fff'
    },

    tradeCenterContent: {
        flexDirection: 'row',
    },

    tradeForm: {
        flex: 0.55
    },

    tradeList: {
        flex: 0.45,
        paddingLeft: 10
    }
    // 交易页结束
});