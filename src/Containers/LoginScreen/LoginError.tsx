
import { Alert } from "react-native"
export default function HandleLoginError(msg: string)
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
