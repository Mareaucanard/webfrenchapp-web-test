import { Metrics } from "@/Theme"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    goBackButton: {
        position: "absolute",
        paddingTop: Metrics.heightPercentageToDP("4%") + (Metrics.isIphoneX() ? 60 : 40),
        paddingLeft: Metrics.widthPercentageToDP("10%"),
        zIndex: 1,
        borderRadius: 1,
    },
    touchable: {
        borderRadius: 15,
        borderWidth: 1,
        overflow: "hidden",
        borderColor: "transparent",
    }
})
