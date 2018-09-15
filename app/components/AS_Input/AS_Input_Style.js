import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    ASInputWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 36,
        borderWidth: 1,
        borderColor: '#becfd2',
        borderRadius: 4
    },

    ASInputOperation: {
        width: 30,
        fontSize: 18,
        lineHeight: 34,
        textAlign: 'center'
    },

    ASInputOperationLeft: {
        borderRightWidth: 1,
        borderRightColor: '#e1e4e8'
    },

    ASInputOperationRight: {
        borderLeftWidth: 1,
        borderLeftColor: '#e1e4e8'
    },

    ASInput: {
        flex: 1,
        padding: 0,
        fontSize: 14,
        textAlign: 'center',
        color: Contract.DEFAULT_FONT_COLOR
    }
});