import React from "react"
import { View, ImageBackground, Text } from "react-native"

import styles from "./ArticleListStyles"


function ArticlePreview(props: any) {
    const { news_data } = props
    const date = new Date ( news_data.date )
    var date_string = date.getDay()

    return (
        <View style={styles.content}
        onStartShouldSetResponder={() => console.log("Clicked data" + news_data.title)}>
            <ImageBackground resizeMode="cover" source={{uri: news_data.image}} style={styles.content}>
            <Text style={styles.sectionTitle}>{news_data.title}</Text>
            <Text>{date_string}</Text>
            </ImageBackground>
        </View>
    )
}

export default ArticlePreview
