
import Constant from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#f8f8f8'
    },

    mainContainer: {
        flex: 1
    },
    
    itemWrap: { 
        paddingBottom: 12,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#d9d9d9',
        borderBottomColor: '#d9d9d9'
    },

    itemTitle: {
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },

    itemTitleText: {
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 14,
        color: Constant.DEFAULT_FONT_COLOR
    },

    itemTableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },

    itemTableRowKey: {
        flexWrap: 'wrap',
        width: '40%'
    },

    itemTableRowVal: {
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        width: '40%'
    },

    itemTableText: {
        fontSize: 13,
        color: Constant.DEFAULT_FONT_COLOR
    }
});