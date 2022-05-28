import React from "react"
import { Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler";

import styles from './ArticleStyles'
import ArticleImage from "./ArticleImage";
import TimestampToString from "@/Tools/TimestampToString";
import BasicButtonStyles from "@/Components/BasicButton/BasicButtonStyles";
import { Common } from "@/Theme";

function Article(props: any) {
    const { news_data } = props

    if (news_data === undefined) {
        return <Text>Couldn't article D:</Text>
    }
    const date_string = TimestampToString(news_data.date)
    return (
        <ScrollView style={Common.basicPage}>
            <ArticleImage news_data={news_data}/>
            <Text style={styles.dateText}>{date_string}</Text>
            <Text style={styles.body}>{news_data.body}</Text>
        </ScrollView>
    )
}

export default Article
