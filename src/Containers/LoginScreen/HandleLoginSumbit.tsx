import { fetchLogin } from "@/Services/AuthServices";
import { Alert } from "react-native";

function LoginWithAPI(email: string, password: string): Object {
    var request = fetchLogin({email: email, password: password})

    request.then(function (response) { // On sucess
        const { data, status } = response
        if (status === 200) {
            console.log("Login success")
            console.log(data)
            return data
        } else {
            return {message: "Unkown reponse"}
        }
    })
    request.catch(function (reason) {
        if (reason === undefined || (reason.status <= 599 && reason.status >= 500)) {
            return {message: "API error"}
        } else if (reason.status <= 499 && reason.status >= 400) {
            return {message: "User error"}
        } else {
            return {message: "Unkown error"}
        }
    })

    return request
}

function HandleLoginError(msg: string)
{
    switch (msg) {
        case "API error":
            Alert.alert("Oops!\nSomething went wrong with our API.\nSorry for the inconvinience.")
            break
        case "User error":
            Alert.alert("Invalid credentials.")
            break
        case "Unkown error":
        case "Unkown response":
        default:
            Alert.alert("Oops!\nSomething went terribly wrong!")
            break
    }
}

export default function HandleLoginSumbit(email: string, password: string) {
    console.log('Form was submited with email ' + email + ' and password ' + password)
    if (email === '' || password === '') {
        console.log("Empty field(s)");
        return false
    }
    var data = LoginWithAPI(email, password)

    console.log(data)
    // if (data === undefined) {
    //     console.warn("Promise didn't complete yet");
    //     return false
    // }
    // if (data.message !== undefined) {
    //     HandleLoginError(data.message)
    //     return false
    // }
}
