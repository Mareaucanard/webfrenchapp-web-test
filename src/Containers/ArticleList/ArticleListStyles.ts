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
    previewTitle: {
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
    imagePreview: {
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 1,
        height: Metrics.heightPercentageToDP('25%'),
        borderColor: Colors.transparent,
        backgroundColor: '#1741658E',
        borderRightColor: Colors.white,
        tintColor: 'rgba(255,255,255,0.5)',
    },
    overlay: {
    },
    datePreview: {
        borderColor: Colors.transparent,
        borderWidth: 1,
        borderRadius: 17,
        alignSelf: 'flex-end',
        top: Metrics.heightPercentageToDP('1%'),
        right: Metrics.heightPercentageToDP('1%'),
        paddingLeft: Metrics.paddingHorizontal,
        paddingRight: Metrics.paddingHorizontal,
        opacity: 0.67,
        backgroundColor: "#071D2F",
        height: 25,
        position: 'absolute',
    },
    datePreviewText: {
        fontFamily: Fonts.type.medium,
        fontSize: 11,
        color: Colors.white,
        textAlign: 'center',
        paddingTop: Metrics.heightPercentageToDP('0.5%'),
    },
    tintEffect: {
        flex: 1,
        backgroundColor: '#1741658E',
    }
})
