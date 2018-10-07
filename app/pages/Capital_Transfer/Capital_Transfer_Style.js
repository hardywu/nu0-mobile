import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#f8f8f8'
    },

    ctWrap: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    ctWrapCenterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    ctWrapItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        overflow: 'hidden',
        height: '100%'
    },

    ctIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },

    ctWrapItemText: {
        fontSize: 13,
        color: '#757575'
    },

    ctWrapSelectIcon: {
        width: 10,
        height: 10,
        marginLeft: 10,
        resizeMode: 'contain'
    },

    formNotice: {
        fontSize: 12,
        color: '#b5b5b7'
    }
});