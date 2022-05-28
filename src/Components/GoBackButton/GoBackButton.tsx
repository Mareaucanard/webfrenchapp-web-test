import React from "react"
import { Image, View } from "react-native"
import { StackActions } from '@react-navigation/native';
import styles from "./GoBackStyle"

const image = require("@/Assets/Images/Icons/Basic/left-arrow.png")

function my_function() {
    console.log("GoBackButton was pressed")
    StackActions.pop(1)
    return true
}

function GoBackButton() {
    return (
        <View style={styles.goBackButton}
        onStartShouldSetResponder={() => my_function()}>
            <Image source={image}></Image>
        </View>
    )
}

export default GoBackButton
