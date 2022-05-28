import React from "react"
import { View, Text, ImageBackground } from "react-native"

import styles from './ArticleStyles'

function Article(props: any) {
    const { news_data } = props
    console.log(news_data.image)

    if (news_data === undefined) {
        return <Text>Couldn't article D:</Text>
    }
    const date_string = new Date(news_data.date).toLocaleDateString()
    return (
        <View>
            <ImageBackground resizeMode="cover" source={{uri: news_data.image}} style={styles.content}>
                <Text style={styles.sectionTitle}>{news_data.title}</Text>
            </ImageBackground>
            <Text>{date_string}</Text>
            <Text>{news_data.content}</Text>
        </View>
    )
}

export default Article
