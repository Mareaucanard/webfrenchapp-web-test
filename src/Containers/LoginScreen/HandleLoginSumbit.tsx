import { navigate } from "@/Navigators/Root";
import { fetchLogin } from "@/Services/AuthServices";
import { Alert } from "react-native";
import HandleLoginError from "./LoginError";

function HandleLoginSucess(email: string, token: string, refreshToken: string) {
    console.log(`Login success with email: ${email}.`)
    console.log(`token: ${token}, refreshToken: ${refreshToken}`)
    navigate("ArticleList", {})
}

function LoginWithAPI(email: string, password: string) {
    var request = fetchLogin({email: email, password: password})

    request.then(function (response) { // On sucess
        const { data } = response
        const { token, refreshToken } = data
        if (token !== undefined && refreshToken !== undefined) {
            console.log(data)
            HandleLoginSucess(email, token, refreshToken)
        } else {
            HandleLoginError("Unkown reponse")
        }
    }, function (error) { // On error
        if (error === undefined || (error.status <= 599 && error.status >= 500)) {
            HandleLoginError("API error")
        } else if (error.status <= 499 && error.status >= 400) {
            HandleLoginError("User error")
        } else {
            HandleLoginError("Unkown error")
        }
    })
    console.log(request)
}

function HandleLoginSumbit(email: string, password: string) {
    console.log('Form was submited with email ' + email + ' and password ' + password)
    if (email === '') {
        Alert.alert("Email is required")
        return
    }
    if (password === '') {
        Alert.alert("Password is required")
        return
    }
    LoginWithAPI(email, password)
}

export default HandleLoginSumbit
