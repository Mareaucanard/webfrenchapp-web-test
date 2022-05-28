import { navigate } from "@/Navigators/Root"
import { Colors } from "@/Theme"
import React from "react"
import { View, ImageBackground, Text } from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler"

import styles from "./ArticleListStyles"
import TimestampToString from "@/Tools/TimestampToString"

function HadnleOnClick(news_data: any) {
    navigate("ArticlePage", { news_data })
}

function DatePreview(props: any) {
    const { date } = props
    return (
        <View style={styles.datePreview}>
            <Text style={styles.datePreviewText}>{date}</Text>
        </View>
    )
}

function ArticlePreview(props: any) {
    const { news_data } = props
    var date_string = TimestampToString(news_data.date)

    return (
        <View style={styles.articlePreview}>
            <TouchableHighlight onPress={() => HadnleOnClick(news_data)} underlayColor={Colors.transparent}>
                <ImageBackground resizeMode="cover" source={{uri: news_data.image}} style={styles.imagePreview}>
                    <View style={styles.tintEffect}></View>
                    <DatePreview date={date_string}/>
                    <Text style={styles.previewTitle}>{news_data.title}</Text>
                </ImageBackground>
            </TouchableHighlight>
        </View>
    )
}

export default ArticlePreview
