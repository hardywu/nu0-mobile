import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    bannerContainer: {
        flex: 1,
        height: 60,
        backgroundColor: '#fff'
    },

    bannerBox: {
        flex: 1,
    },

    bannerItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bannerItemImg: {
        width: 460,
        height: 44,
        borderRadius: 50,
        resizeMode: 'cover'
    }
});