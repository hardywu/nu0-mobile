import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    dcSelectOptions: {
        position: 'absolute',
        top: 24,
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 4,
        backgroundColor: '#fff',
        zIndex: 9,
        elevation: 6,
        shadowColor:'#000',
        shadowOffset:{
            height: 0,
            width: 0
        },
        shadowRadius: 2,
        shadowOpacity: 0.3,
    },

    dcSelectOptionsItem: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        lineHeight: 30,
        textAlign: 'center',
        color: Contract.DEFAULT_FONT_COLOR
    }
});