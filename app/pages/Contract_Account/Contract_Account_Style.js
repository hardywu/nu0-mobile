import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#f8f8f8'
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