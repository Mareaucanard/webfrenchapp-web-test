import React, { useState } from "react"
import { View, Text } from "react-native";

import { Common } from "@/Theme";
import styles from "./ArticleListStyles"
import GetNewsList from "./FetchNews";

function ArticleList() {
    var data = GetNewsList()

    console.log(data)
    if (data === undefined) {
        return <Text>Chargement...</Text>
    } else if (data.data === undefined) {
        return <Text>Erreur</Text>
    } else {
        return (
            <Text>Chargement fini!</Text>
        )
    }
}

function ArticleListPage() {;

    return (
        <View style={Common.basicPage}>
            <Text style={styles.title}>Actualité</Text>
            <ArticleList/>
        </View>
    )
}

export default ArticleListPage
