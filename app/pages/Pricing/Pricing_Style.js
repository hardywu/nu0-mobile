import Contract from '../../public/constant'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        backgroundColor: '#fff'
    },

    headerMainNav: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    headerMainNavWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden',
        width: 132,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Contract.BLUE_COLOR
    },

    headerMainNavItem: {
        backgroundColor: '#fff',
    },

    headerMainNavItemActive: {
        backgroundColor: Contract.BLUE_COLOR
    },

    headerMainNavItemName: {
        width: 65,
        paddingTop: 6,
        paddingBottom: 6,
        fontSize: 13,
        color: Contract.BLUE_COLOR,
        textAlign: 'center'
    },

    headerMainNavItemNameActive: {
        color: '#fff'
    }
});