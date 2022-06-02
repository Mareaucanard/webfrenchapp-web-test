import React from "react"
import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler";

import styles from './ArticleStyles'
import ArticleImage from "./ArticleImage";
import TimestampToString from "@/Tools/TimestampToString";
import { Common } from "@/Theme";
import ShareButton from "@/Components/ShareButton/ShareButton";

function GenerateShareContent(article: any) {
    return ({
        message: "Regarde cet article!",
        url: "Placeholder",
        title: article.title,
    })
}

function Article(props: any) {
    const { news_data } = props
    const content = GenerateShareContent(news_data)

    if (news_data === undefined) {
        return <Text>Couldn't article D:</Text>
    }
    const date_string = TimestampToString(news_data.date)
    return (
        <ScrollView style={styles.content}>
            <ArticleImage news_data={news_data}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.dateText}>{date_string}</Text>
                <ShareButton style={styles.firstShare} content={content}/>
            </View>
            <Text style={styles.body}>{news_data.body}</Text>
            <ShareButton style={styles.secondShare} content={content}/>
        </ScrollView>
    )
}

export default Article
