import Constant from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    operationWrap: {
        flexDirection: 'row'
    },

    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 8,
        paddingRight: 8
    },

    btnText: {
        fontSize: 15,
        color: '#fff'
    },

    collectionWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        backgroundColor: '#293751'
    },

    collectionIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    collectionText: {
        marginTop: 4,
        fontSize: 13,
        color: '#fff'
    }
});