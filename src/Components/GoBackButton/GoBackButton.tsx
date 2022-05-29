import React from "react"
import { Image, View } from "react-native"
import { StackActions } from '@react-navigation/native';
import styles from "./GoBackStyle"
import { navigationRef } from "@/Navigators/Root";
import { TouchableHighlight } from "react-native-gesture-handler";

const image = require("@/Assets/Images/Icons/Basic/left-arrow.png")

function my_function() {
    navigationRef.current?.dispatch(StackActions.pop());
    return true
}

function GoBackButton() {
    return (
        <View style={styles.goBackButton}>
            <TouchableHighlight onPress={() => my_function()} style={styles.touchable} underlayColor="#00000020">
                <Image source={image}></Image>
            </TouchableHighlight>
        </View>
    )
}

export default GoBackButton
