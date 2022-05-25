import api from '@/Services'
import authReducer from '@/Reducers/AuthReducer'

function FetchNews(token: string) {
    const response = api.get("/news", {headers: {Authorization: `Bearer ${token}`}})

    return response
}

function GetNewsList(token: string) {
    if (token === undefined) {
        return false
    }

    return {data: ["Hello world!", "Foo", "Bar"]}
    //const response = FetchNews(token)
    //response.then(function (response) {
    //    const { data } = response
    //    const { news } = data
    //    return news
    //}, function (error) {
    //    console.log(error)
    //    return false
    //})
    //return JSON.parse(JSON.stringify(response))
}

export default GetNewsList
