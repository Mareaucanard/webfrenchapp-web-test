import React, { useState, useEffect } from "react"
import { View, Text, ImageBackground } from "react-native";

import { Common } from "@/Theme";
import styles from "./ArticleListStyles"
import GetNewsList from "./FetchNews";
import { ScrollView } from "react-native-gesture-handler";

function Article(props: any) {
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

function ArticleList(props: any) {
    var [news, updateNews] = useState(undefined)
    useEffect(() => GetNewsList(props.token, updateNews), []) // This is here to only GetNewsList once, else it would infinite loop

    if (news === undefined) {
        return <Text>Chargement...</Text>
    } else if (news === false) {
        return <Text>Erreur</Text>
    } else {
        return news.map((news_data: any) => <Article news_data={news_data} key={news_data.id} />)
    }
}

function ArticleListPage(parameters: any) {
    const { route } = parameters
    const { params } = route
    const { token , refreshToken } = params

    return (
        <View style={Common.basicPage}>
            <Text style={styles.title}>Actualité</Text>
            <ScrollView style={Common.basicPage}>
                <ArticleList token={token}/>
            </ScrollView>
        </View>
    )
}

export default ArticleListPage
