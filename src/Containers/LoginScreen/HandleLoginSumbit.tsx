import { navigate } from "@/Navigators/Root";
import { fetchLogin } from "@/Services/AuthServices";
import { Alert } from "react-native";
import HandleLoginError from "./LoginError";

function HandleLoginSucess(token: string, refreshToken: string) {
    navigate("ArticleList", {token: token, refreshToken: refreshToken})
}

function LoginWithAPI(email: string, password: string) {
    var request = fetchLogin({email: email, password: password})

    request.then(function (response) {
        const { data } = response
        const { token, refreshToken } = data
        if (token !== undefined && refreshToken !== undefined) {
            HandleLoginSucess(token, refreshToken)
        } else {
            HandleLoginError("Unkown reponse")
        }
    }, function (error) {
        if (error === undefined || (error.status <= 599 && error.status >= 500)) {
            HandleLoginError("API error")
        } else if (error.status <= 499 && error.status >= 400) {
            HandleLoginError("User error")
        } else {
            HandleLoginError("Unkown error")
        }
    })
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
