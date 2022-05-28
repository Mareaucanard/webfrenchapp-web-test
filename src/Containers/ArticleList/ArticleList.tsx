import React, { useState, useEffect } from "react"
import { Text } from "react-native";
import ArticlePreview from "./ArticlePreview";

import GetNewsList from "./FetchNews";

function ArticleList(props: any) {
    var [news, updateNews] = useState(undefined)
    useEffect(() => GetNewsList(props.token, updateNews), []) // This is here to only get the news list once, else it would infinite loop

    if (news === undefined) {
        return <Text>Chargement...</Text>
    } else if (news === false) {
        return <Text>Erreur, essayer de vous reconnecter</Text>
    } else {
        return news.map((news_data: any) => <ArticlePreview news_data={news_data} key={news_data.id} />)
    }
}

export default ArticleList
