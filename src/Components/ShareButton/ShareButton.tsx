import React from "react"
import { Share, Text, Image } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const image = require("@/Assets/Images/Icons/Basic/share.png")

function DefaultContent() {
    return ({
        message: 'Check out this app: https://play.google.com/store/apps/details?id=com.example.app',
        url: 'https://play.google.com/store/apps/details?id=com.example.app',
        title: 'Check out this app',
    })
}

function ShareButton(props: any) {
    var { style, content } = props

    if (content === undefined) {
        content = DefaultContent()
    }
    return (
        <TouchableOpacity style={[{flexDirection: 'row', justifyContent: 'flex-end'}, style]} onPress={() => Share.share(content)}>
            <Image style={{alignSelf: 'flex-start'}} source={image}></Image>
            <Text style={style}>  Partager</Text>
        </TouchableOpacity>
    )
}

export default ShareButton
