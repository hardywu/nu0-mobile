import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    headerCenterContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    //菜单按钮开始
    headerMenu: {
        width: 24,
        height: 24
    },

    headerMenuIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    //菜单按钮结束

    // 一级导航开始
    headerMainNav: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    headerMainNavWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden',
        width: 132,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Contract.BLUE_COLOR
    },

    headerMainNavItem: {
        backgroundColor: '#fff',
    },

    headerMainNavItemActive: {
        backgroundColor: Contract.BLUE_COLOR
    },

    headerMainNavItemName: {
        width: 65,
        paddingTop: 6,
        paddingBottom: 6,
        fontSize: 13,
        color: Contract.BLUE_COLOR,
        textAlign: 'center'
    },

    headerMainNavItemNameActive: {
        color: '#fff'
    },
    // 一级导航结束

    // 搜索按钮开始
    headerSearch: {
        width: 24,
        height: 24
    },

    headerSearchIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    // 搜索按钮结束

    // 主体内容开始
    // 交易开始
    trade: {
        backgroundColor: '#fff'
    },

    tradeHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 4,
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e4e8'
    },

    tradeHeadItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    tradeHeadTitle: {
        fontSize: 20,
        color: Contract.DEFAULT_FONT_COLOR
    },

    tradeHeadTitleArrow: {
        width: 14,
        height: 14,
        marginLeft: 6,
        resizeMode: 'center'
    },

    tradeHeadNumWrap: {

    },

    tradeHeadNumBig: {
        fontSize: 16,
        color: '#767678',
        textAlign: 'right'
    },

    tradeHeadNumSmall: {
        fontSize: 12,
        color: '#767678',
        textAlign: 'right'
    },

    tradeHeadQuoWrap: {
        paddingLeft: 8,
        paddingRight: 8,
        marginLeft: 6,
        borderRadius: 4,
        backgroundColor: '#767678'
    },

    tradeHeadQuoText: {
        fontSize: 14,
        lineHeight: 24,
        color: '#fff'
    },

    tradeBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom: 12
    },

    tradeBodyForm: {
        flex: 1
    },

    tradeBodyQuo: {
        flex: 1,
        paddingLeft: 10
    },
    // 交易结束
    
    // 限价单开始
    limitedTitleText: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 14,
        color: '#999'
    }
    // 限价单结束
    // 主体内容结束
});