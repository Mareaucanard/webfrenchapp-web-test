import React from "react"
import { View, Text } from "react-native";

import { Common } from "@/Theme";
import styles from "./ArticleListStyles"
import GetNewsList from "./FetchNews";

function Article(props: any) {
    return (
        <View style={styles.content}>
            <Text style={styles.sectionTitle}>{props.title}</Text>
        </View>
    )
}

function ArticleList(token: string) {
    var result = GetNewsList(token)

    if (result === undefined) {
        return <Text>Chargement...</Text>
    } else if (result === false) {
        return <Text>Erreur</Text>
    } else {
        return result.data.map((value) => <Article title={value} />)
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
