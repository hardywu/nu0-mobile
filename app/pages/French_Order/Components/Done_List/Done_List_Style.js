import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    color1: {
        color: '#377cad'
    },

    color2: {
        color: '#1c384d'
    },
    
    justifyContentFlexEnd: {
        justifyContent: 'flex-end'
    },

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
        // height: 26,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 13,
        paddingRight: 16,
        borderLeftWidth: 3,
        borderLeftColor: '#ccc'
    },

    listItemHeadItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '32.5%'
    },

    listItemHeadItem1: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '29.5%'
    },

    listItemHeadItem2: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '49.5%'
    },

    listItemHeadItem3: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '19.5%'
    },

    listItemHeadTitle: {
        marginRight: 6,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#ccc'
    },

    listItemHeadSubTitle: {
        marginRight: 6,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#ccc'
    },

    listItemHeadUserName: {
        marginRight: 6,
        fontSize: 13,
        color: '#ccc'
    },

    listItemHeadStatus: {
        fontSize: 13,
        color: '#8f9494'
    },

    listItemHeadPayFuncIcon: {
        width: 15,
        height: 15,
        marginRight: 4,
        resizeMode: 'contain'
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