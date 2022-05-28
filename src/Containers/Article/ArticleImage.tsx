import React from "react"
import { View, ImageBackground, Text } from "react-native"

import styles from "./ArticleStyles"

function ArticleImage(props: any) {
    const { news_data } = props

    return (
        <View style={styles.articlePreview}>
                <ImageBackground resizeMode="cover" source={{uri: news_data.image}} style={styles.newsImage}>
                    <View style={styles.tintEffect}></View>
                    <Text style={styles.newsTitle}>{news_data.title}</Text>
                </ImageBackground>
        </View>
    )
}

export default ArticleImage
