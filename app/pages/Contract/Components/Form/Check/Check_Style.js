import Contract from '../../../../../public/constant';
import {
    StyleSheet,
    Platform
} from 'react-native';

export default styles = StyleSheet.create({
    checkWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: '100%',
        height: 24,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4
    },

    checkText: {
        flex: 1,
        overflow: 'hidden',
        marginLeft: 4,
        marginRight: 4,
        fontSize: 14,
        textAlign: 'center',
        color: '#ccc'
    }
});