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
    newsTitle: {
        fontFamily: Fonts.type.medium,
        fontSize: 18,
        color: Colors.white,
        position: 'absolute',
        bottom: Metrics.heightPercentageToDP('1%'),
        paddingLeft: Metrics.paddingHorizontal,
        textAlign: 'left'
    },
    articlePreview: {
        width: '100%',
        paddingBottom: Metrics.heightPercentageToDP('5%'),
    },
    newsImage: {
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 1,
        height: Metrics.heightPercentageToDP('25%'),
        borderColor: Colors.transparent,
        backgroundColor: '#1741658E',
        borderRightColor: Colors.white,
        tintColor: 'rgba(255,255,255,0.5)',
    },
    dateText: {
        fontFamily: Fonts.type.base,
        fontStyle: 'italic',
        fontSize: 15,
        color: Colors.text,
        textAlign: 'left'
    },
    body: {
        fontFamily: Fonts.type.base,
        fontSize: 16,
        color: Colors.text,
        paddingTop: Metrics.heightPercentageToDP('2%'),
        paddingBottom: Metrics.heightPercentageToDP('2%'),
    },
    tintEffect: {
        flex: 1,
        backgroundColor: '#1741658E',
    },
    firstShare: {
        alignContent: 'flex-end',
    },
    secondShare: {
        alignSelf: 'flex-start',
        paddingBottom: Metrics.heightPercentageToDP('10%'),
    }
})
