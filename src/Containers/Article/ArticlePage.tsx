import React from "react"
import { View, Text } from "react-native"

import { Common } from "@/Theme"
import Article from "./Article"
import styles from './ArticleStyles'

function ArticlePage(props: any) {
    const { route } = props
    const { params } = route
    const { news_data } = params

    return (
        <View style={Common.basicPage}>
            <Text style={styles.title}>Article</Text>
            <Article news_data={news_data} />
        </View>
    )
}

export default ArticlePage