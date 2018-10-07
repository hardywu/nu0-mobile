import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    optionsWrap: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        maxHeight: 300,
        backgroundColor: '#fff'
    },

    optionsItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6'
    },

    optionsItemText: {
        lineHeight: 40
    }
});