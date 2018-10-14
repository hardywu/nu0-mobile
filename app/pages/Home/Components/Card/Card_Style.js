import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    bgBule: {
        backgroundColor: '#5291f2'
    },

    bgPurple: {
        backgroundColor: '#8476f1'
    },

    bgGreen: {
        backgroundColor: '#57b370'
    },

    cardContainer: {
        height: 108,
        // paddingTop: 12,
        // paddingBottom: 12,
        // paddingLeft: 10,
        // paddingRight: 10,
        padding: 10,
        backgroundColor: '#fff'
    },

    cardScroll: {

    },

    cardItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 140,
        height: '100%',
        // paddingLeft: 16,
        // paddingRight: 16,
        borderRadius: 10,
        marginRight: 14
    },

    cardItemB: {
        marginBottom: 6,
        fontSize: 15.4,
        color: '#fff'
    },

    cardItemS: {
        fontSize: 11,
        color: '#fff'
    }
});