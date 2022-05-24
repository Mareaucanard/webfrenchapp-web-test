import { StyleSheet } from 'react-native'
import Metrics from '@/Theme/Metrics'
import { Colors } from '@/Theme/Variables'
import Fonts from '@/Theme/FontsTypes'

export default StyleSheet.create({
    contentContainer: {
        width: Metrics.widthPercentageToDP('100%'),
        height: Metrics.heightPercentageToDP('80%'),
        paddingHorizontal: Metrics.paddingHorizontal,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 0,
    },
    contentContainerSmall: {
        width: '100%',
        height: Metrics.heightPercentageToDP('100%'),
        backgroundColor: Colors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 0,
    },
    content: {
        width: '100%',
        justifyContent: 'space-between',
        paddingBottom: Metrics.isIphoneX()
            ? Metrics.heightPercentageToDP('5%')
            : Metrics.heightPercentageToDP('1%'),
    },
    title: {
        fontFamily: Fonts.type.bold,
        fontSize: 26,
        width: '100%',
        textAlign: 'center',
        color: Colors.text,
        paddingTop: Metrics.heightPercentageToDP('3%'),
    },
    sectionTitle: {
        fontFamily: Fonts.type.medium,
        fontSize: 14,
        color: Colors.text,
        opacity: 0.4,
        marginBottom: 10,
    }
})
