import React from "react"
import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler";

import { Common } from "@/Theme"
import styles from './ArticleListStyles'
import ArticleList from "./ArticleList";

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
