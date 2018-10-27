import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#f8f8f8'
    },

    header: {
        justifyContent: 'center',
        width: '100%',
        height: 46,
        backgroundColor: '#fff'
    },

    headerCenterContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    goBackIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    headTabWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 16
    },

    headTabItem: {
        justifyContent: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent'
    },

    headTabItemName: {
        fontSize: 15,
        lineHeight: 15,
        color: Contract.DEFAULT_FONT_COLOR,
    },

    assetsWrap: {
        paddingTop: 18,
        paddingBottom: 13,
        backgroundColor: '#fff'
    },

    assetsOperation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12
    },

    assetsOperationItem: {
        flex: 1,
        alignItems: 'center'
    },

    assetsOperationItemIcon: {
        width: 21,
        height: 21,
        marginBottom: 4,
        resizeMode: 'contain'
    },

    assetsOperationItemText: {
        fontSize: 12,
        color: '#717171'
    },

    listWrap: {
        marginTop: 10
    }
});