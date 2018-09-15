import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    PercentBarWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#f7f8fa'
    },

    PercentBarItem: {
        flex: 1,
        fontSize: 12,
        lineHeight: 26,
        color: '#b5b5b7',
        textAlign: 'center'
    }
});