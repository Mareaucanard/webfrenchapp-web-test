import { fetchLogin } from "@/Services/AuthServices";
import { Alert } from "react-native";
import HandleLoginError from "./LoginError";


// This is a placeholder
// But I don't know how to 'switch pages'
// It's not really switching pages because it's a mobile app but that's the point
// I was thinking of using this function to switch kind of global variable
// But I don't know how to do that cleanly
// So for now I'm just going to use it to show an alert
function LoginSucess(email: string, token: string, refreshToken: string) {
    console.log(`Login success with email: ${email}.`)
    console.log(`token: ${token}, refreshToken: ${refreshToken}`)
    Alert.alert("Login success")
}

function LoginWithAPI(email: string, password: string): Object {
    var request = fetchLogin({email: email, password: password})

    request.then(function (response) { // On sucess
        const { data } = response
        const { token, refreshToken } = data
        if (token !== undefined && refreshToken !== undefined) {
            console.log(data)
            Alert.alert("Login success") // Needs to load the page with the news on it
        } else {
            HandleLoginError("Unkown reponse")
        }
    })
    request.catch(function (reason) {
        if (reason === undefined || (reason.status <= 599 && reason.status >= 500)) {
            HandleLoginError("API error")
        } else if (reason.status <= 499 && reason.status >= 400) {
            HandleLoginError("User error")
        } else {
            HandleLoginError("Unkown error")
        }
    })

    return request
}

export default function HandleLoginSumbit(email: string, password: string) {
    console.log('Form was submited with email ' + email + ' and password ' + password)
    if (email === '' || password === '') {
        console.log("Empty field(s)");
        return false
    }
    LoginWithAPI(email, password)
}
