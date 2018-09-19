import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    UnitInputWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 24,
        borderWidth: 1,
        borderColor: '#becfd2',
        borderRadius: 4
    },

    UnitInputGrayText: {
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 14,
        color: '#ccc'
    },

    UnitInput: {
        flex: 1,
        fontSize: 14,
        textAlign: 'right',
        color: Contract.DEFAULT_FONT_COLOR
    }
});