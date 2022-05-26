import api from '@/Services'

function FetchNews(token: string) {
    const response = api.get("/news", {headers: {Authorization: `Bearer ${token}`}})

    return response
}

function GetNewsList(token: string, updateNews: Function): void {
    if (token === undefined) {
        updateNews(false)
    }

    const response = FetchNews(token)
    response.then(function (response) {
        console.log(response.data)
        updateNews(response.data)
    }, function (error) {
        updateNews(false)
    })
}

export default GetNewsList
