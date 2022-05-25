import api from '@/Services'
import authReducer from '@/Reducers/AuthReducer'

function FetchNews(token: string) {
    if (token === undefined) {
        console.log("No token")
        return undefined
    }
    const response = api.get("/news", {headers: {Authorization: `Bearer ${token}`}})

    return response
}

function GetNewsList() {
    const data = authReducer(undefined, {type: undefined})
    const token = data.token
    console.log(data)
    const response = FetchNews(token)

    if (response === undefined) {
        return false
    }
    response.then(function (response) {
        const { data } = response
        const { news } = data
        console.log(data)
        console.log(news)
        return news
    }, function (error) {
        console.log(error)
        return false
    })
    return JSON.parse(JSON.stringify(response))
}

export default GetNewsList
