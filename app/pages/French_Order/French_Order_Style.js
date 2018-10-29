import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
     nav: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e4e8',
        backgroundColor: '#fff'
    },

    navItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },

    navItemText: {
        fontSize: 16,
        lineHeight: 50,
        color: Contract.DEFAULT_FONT_COLOR
    },

    list: {
        flex: 1
    }
});