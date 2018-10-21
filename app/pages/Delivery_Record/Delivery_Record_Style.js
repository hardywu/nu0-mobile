import Constant from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#f8f8f8'
    },

    mainTabWrap: {
        backgroundColor: '#fff'
    },

    mainTabItem: {
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 24,
        paddingRight: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent'
    },

    mainTabItemText: {
        fontSize: 13,
        color: '#b5b5b7'
    },

    mainContent: {
        flex: 1
    },

    listItemHead: {
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#ebedf0'
    },

    listItemHeadText: {
        fontSize: 13,
        color: Constant.DEFAULT_FONT_COLOR
    },

    listItemBody: {
        backgroundColor: '#fff'
    },

    listItemBodyRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8
    },

    listItemBodyRowKey: {
        width: '50%'
    },

    listItemBodyRowVal: {
        width: '50%'
    },

    listItemBodyRowKeyText: {
        fontSize: 13,
        color: Constant.DEFAULT_FONT_COLOR,
        textAlign: 'left'
    },

    listItemBodyRowValText: {
        fontSize: 13,
        color: Constant.DEFAULT_FONT_COLOR,
        textAlign: 'right'
    }
});