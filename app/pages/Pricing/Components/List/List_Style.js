import Contract from '../../../../public/constant'
import { 
    Platform,
    StyleSheet
} from 'react-native'

let listFilterStyle = (() => {
    if(Platform.OS === "ios") {
        return { zIndex: 9 }
    } else {
        return {}
    }
})()

export default styles = StyleSheet.create({
    mt8: {
        marginTop: 8
    },

    mb4: {
        marginBottom: 4
    },

    mb8: {
        marginBottom: 8
    },

    separate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    listFilter: listFilterStyle,

    listFilterOptions: {
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

    listFilterOptionsItem: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        lineHeight: 30,
        textAlign: 'center',
        color: Contract.DEFAULT_FONT_COLOR
    },

    listFilterVal: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },

    listFilterText: {
        fontSize: 12,
        lineHeight: 12,
        color: '#767678'
    },

    listFilterArrow: {
        width: 12,
        height: 12,
        marginLeft: 4,
        resizeMode: 'contain'
    },

    listHeadItem: {
        fontSize: 12,
        color: '#b5b5b7'
    },

    listBodyItem: {
        marginBottom: 8
    },

    listBodyItemVal: {
        flex: 1,
        fontSize: 14,
        color: '#767678'
    },

    listBodyItemValRight: {
        textAlign: 'right'
    },

    listBodyLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#f2f2f2'
    }
});