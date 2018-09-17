import Contract from '../../../../public/constant'
import { 
    Platform,
    StyleSheet
} from 'react-native'

export default styles = StyleSheet.create({
    sideMenuWrap: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1000
    },

    sideMenuOuter: {
        flex: 1,
        width: 170,
        paddingTop: 60,
        backgroundColor: '#fff'
    },

    sideMenuIcon: {
        position: 'absolute',
        top: 30,
        right: 20,
        width: 25,
        height: 25
    },

    sideMenuMain: {
        flex: 1
    },

    sideMenuMainItem: {
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 15,
        lineHeight: 50,
        color: Contract.DEFAULT_FONT_COLOR,
        textAlign: 'left'
    }
});