import { Metrics } from "@/Theme"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    goBackButton: {
        position: "absolute",
        paddingTop: Metrics.heightPercentageToDP("4%") + (Metrics.isIphoneX() ? 60 : 40),
        paddingLeft: Metrics.widthPercentageToDP("10%"),
    }
})
