import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    header: {
        position: 'relative',
        zIndex: 10,
        height: 50,
        backgroundColor: '#fff'
    },

    headerCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    mainNavLeft: {
        flex: 1,
        justifyContent: 'center',
    },

    mainNavLeftText: {
        fontSize: 16,
        color: Contract.DEFAULT_FONT_COLOR,
        textAlign: 'left'
    },

    mainNavCenter: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainNavCenterText: {
        fontSize: 22,
        color: Contract.DEFAULT_FONT_COLOR,
        textAlign: 'center'
    },

    mainNavRight: {
        flex: 1,
        justifyContent: 'center'
    },

    mainNavRightText: {
        fontSize: 16,
        color: Contract.DEFAULT_FONT_COLOR,
        textAlign: 'right'
    },

    mainNavCur: {
        position: 'absolute',
        top: 51,
        left: 0,
        zIndex: 9999,
        overflow: 'hidden',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(238, 239, 240, .9)'
    },

    mainNavCurItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.3333%',
        height: 110
    },

    mainNavCurItemIcon: {
        width: 50,
        height: 50,
        marginBottom: 14,
        resizeMode: 'contain'
    },

    mainNavCurItemName: {
        fontSize: 16,
        color: '#9aa8b7'
    },

    subNav: {
        position: 'relative',
        flexDirection: 'row',
        zIndex: 0,
        height: 39,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        backgroundColor: '#fff'
    },

    subNavItemWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    subNavItem: {
        justifyContent: 'center',
        height: 38,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent'
    },

    subNavItemText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666'
    },

    //资产开始
    assets: {
        width: '100%',
        flexDirection: 'row',
        height: 36,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        backgroundColor: '#fff'
    },

    assetsCenterContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 16
    },

    assetsText: {
        flex: 1,
        fontSize: 12,
        color: '#b5b5b7'
    },

    assetsArrow: {
        position: 'absolute',
        right: 0,
        width: 16,
        height: 16,
        transform: [
            { rotate: '-90deg' }
        ]
    },
    //资产结束

    //条件筛选栏开始
    searchBar: {
        height: 36,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        backgroundColor: '#fff'
    },

    searchBarHide: {
        overflow: 'hidden',
        height: 0,
    },

    searchBarCenterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    searchBarItem: {
        flex: .2,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },

    searchBarItemText: {
        fontSize: 13,
        color: '#b5b5b7'
    },

    searchBarItemSelectIcon: {
        width: 13,
        height: 13,
        marginRight: 4
    },

    searchBarItemArrowIcon: {
        width: 13,
        height: 13,
        marginLeft: 4
    },
    //条件筛选栏结束

    list: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },

    listItem: {
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 6,
        backgroundColor: '#fff'
    },

    listItemHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 26,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 13,
        paddingRight: 16,
        borderLeftWidth: 3,
        borderLeftColor: '#ccc'
    },

    listItemHeadInfo: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
    },

    listItemHeadPayFunc: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    listItemHeadPayFuncIcon: {
        width: 15,
        height: 15
    },

    listItemHeadInfoUser: {
        marginRight: 6,
        fontSize: 13,
        color: '#ccc'
    },

    listItemHeadDeal: {
        marginRight: 6,
        fontSize: 11,
        color: '#ccc'
    },

    listItemHeadDealRate: {
        fontSize: 11,
        color: '#ccc'
    },

    listItemBody: {
        flexDirection: 'row',
        paddingRight: 16,
        marginTop: 16
    },

    listItemBodyItem: {
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 16,
        borderRightWidth: 1,
        borderRightColor: '#e6e6e6'
    },

    listItemBodyItemValBig: {
        fontSize: 15,
        color: '#ccc'
    },

    listItemBodyItemValSmall: {
        fontSize: 13,
        color: '#ccc'
    },

    listItemBodyItemKey: {
        marginTop: 3,
        fontSize: 13,
        color: '#ccc'
    },

    //发布按钮开始
    releaseBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 42,
        height: 42,
        borderRadius: 50,
        backgroundColor: '#fff',
        elevation: 6,
        shadowColor:'#000',
        shadowOffset:{
            height: 0,
            width: 0
        },
        shadowRadius: 2,
        shadowOpacity: 0.1,
    },

    releaseBtnIcon: {
        width: 17,
        height: 17
    }
    //发布按钮结束
});