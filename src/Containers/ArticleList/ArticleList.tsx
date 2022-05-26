import React, { useState, useEffect } from "react"
import { View, Text, Button } from "react-native";

import { Common } from "@/Theme";
import styles from "./ArticleListStyles"
import GetNewsList from "./FetchNews";
import BasicButtonStyles from "@/Components/BasicButton/BasicButtonStyles";
import { BasicButton } from "@/Components";

function Article(props: any) {
    const { news_data } = props
    return (
        <View style={styles.content}>
            <Text style={styles.sectionTitle}>{news_data.title}</Text>
            <Text>{news_data.body}</Text>
        </View>
    )
}

function ArticleList(props: Object) {
    var [news, updateNews] = useState(undefined)
    useEffect(() => GetNewsList(props.token, updateNews), []) // This is here to only GetNewsList once, else it would infinite loop

    if (news === undefined) {
        return <Text>Chargement...</Text>
    } else if (news === false) {
        return <Text>Erreur</Text>
    } else {
        return news.map((news_data: Object) => <Article news_data={news_data} key={news_data.id} />)
    }
}

function ArticleListPage(parameters: Object) {
    const { route } = parameters
    const { params } = route
    const { token , refreshToken } = params

    return (
        <View style={Common.basicPage}>
            <Text style={styles.title}>Actualité</Text>
            <ArticleList token={token}/>
        </View>
    )
}

export default ArticleListPage
