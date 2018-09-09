import Contract from '../../../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    bannerContainer: {
        overflow: 'hidden',
        width: '100%',
        height: 60,
        backgroundColor: '#fff'
    },

    // bannerBox: {
    //     flex: 3,
    //     flexDirection: 'row',
    // },

    bannerItem: {
        // flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    bannerItemImg: {
        overflow: 'hidden',
        width: '95.8%',
        height: 44,
        borderRadius: 22,
        resizeMode: 'cover'
    }
});