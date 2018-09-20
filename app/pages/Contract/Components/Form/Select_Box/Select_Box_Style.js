import Contract from '../../../../../public/constant';
import {
    StyleSheet,
    Platform
} from 'react-native';

export default styles = StyleSheet.create({
    selectBoxWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 24,
        paddingLeft: 4,
        paddingRight: 4,
        borderWidth: 1,
        borderColor: '#becfd2',
        borderRadius: 4
    },

    selectBoxName: {
        fontSize: 14,
        color: '#ccc'
    },

    selectBoxVal: {
        fontSize: 14,
        color: '#333'
    }
});