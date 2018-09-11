import Contract from '../../public/constant'
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

    //TODO: 这里写搜索栏
    searchBar: {
        height: 36,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        backgroundColor: 'pink'
    },
    //TODO: 这里写搜索栏

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
    }
});