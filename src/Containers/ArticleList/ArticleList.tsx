import React, { useState } from "react"
import { View, Text } from "react-native";

import { Common } from "@/Theme";
import styles from "./ArticleListStyles"

function ArticleList() {
    //const Articles = FetchNews();

    return (
        <View style={Common.basicPage}>
            <Text style={styles.title}>Hello world!</Text>
        </View>
    )
}

export default ArticleList
