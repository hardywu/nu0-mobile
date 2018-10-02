import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#f8f8f8'
    },

    head: {
        width: '100%',
        backgroundColor: '#fff'
    },

    body: {
        flex: 1,
        marginTop: 6.3
    },

    headInputCenterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5.6,
        paddingBottom: 5.6,
    },

    goBackIcon: {
        width: 17.5,
        height: 17.5,
        marginRight: 7.7,
        resizeMode: 'contain'
    },

    headInputWrap: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5.25,
        paddingBottom: 5.25,
        paddingLeft: 7.7,
        paddingRight: 7.7,
        borderRadius: 4,
        backgroundColor: '#f8f8f8'
    },

    headInputSearchIcon: {
        width: 12,
        height: 12,
        marginRight: 8,
        resizeMode: 'contain'
    },

    headInput: {
        flex: 1,
        padding: 0,
        fontSize: 12.6,
        color: Contract.DEFAULT_FONT_COLOR
    },

    headNavWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 42,
        backgroundColor: '#fff'
    },

    headNavItem: {
        flex: 1,
        justifyContent: 'center',
        height: 42,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent'
    },

    headNavItemText: {
        fontSize: 14,
        textAlign: 'center',
        color: Contract.DEFAULT_FONT_COLOR
    },

    emptyingHistory: {
        backgroundColor: '#fff'
    },

    emptyingHistoryCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 46.2
    },

    emptyingHistoryText: {
        fontSize: 15,
        color: '#ccc'
    },

    history: {
        flex: 1
    },

    historyItem: {
        height: 46.2,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },

    historyItemCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    historyItemText: {
        fontSize: 15
    },

    historyItemIcon: {
        width: 15.4,
        height: 15.4,
        resizeMode: 'contain'
    }
});