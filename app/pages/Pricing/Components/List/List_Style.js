import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    mt8: {
        marginTop: 8
    },

    mb4: {
        marginBottom: 4
    },

    mb8: {
        marginBottom: 8
    },

    separate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    listFilter: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },

    listFilterText: {
        fontSize: 12,
        color: '#767678'
    },

    listFilterArrow: {
        width: 12,
        height: 12,
        marginLeft: 4,
        resizeMode: 'contain'
    },

    listHeadItem: {
        fontSize: 12,
        color: '#b5b5b7'
    },

    listBodyItem: {
        marginBottom: 8
    },

    listBodyItemVal: {
        flex: 1,
        fontSize: 14,
        color: '#767678'
    },

    listBodyItemValRight: {
        textAlign: 'right'
    },

    listBodyLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#f2f2f2'
    }
});