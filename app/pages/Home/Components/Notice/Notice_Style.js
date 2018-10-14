import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    noticeContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 60,
        // paddingLeft: 10,
        // paddingRight: 10,
        backgroundColor: '#fff'
    },

    noticeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 32,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: '#edf4fe',
        borderRadius: 50,
        overflow: 'hidden'
    },

    noticeIcon: {
        width: 18,
        height: 18,
        marginRight: 8
    },

    noticeText: {
        flex: 1,
        height: 18,
        fontSize: 14,
        color: '#7b8084'
    }
});