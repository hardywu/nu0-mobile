import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        width: '100%',
        height: 42,
        backgroundColor: '#fff'
    },

    headerCenterContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    goBackIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    headTitle: {
        flex: 1,
        paddingRight: 16,
        fontSize: 15,
        color: Contract.DEFAULT_FONT_COLOR,
        textAlign: 'center'
    }
});