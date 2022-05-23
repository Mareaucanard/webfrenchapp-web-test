import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput} from 'react-native'
import { Common } from '@/Theme'
import { BasicButton } from '@/Components'

import HandleLoginSumbit from './HandleLoginSumbit'
import styles from './LoginScreenStyles'
const image = require('@/Assets/Images/Illustrations/login-background.png')


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        HandleLoginSumbit(email, password)
    }
    return (
        <View style={[styles.contentContainer]}>
            <Text style={styles.title}>Connexion</Text>

            <Text style={styles.sectionTitle}>Adress email</Text>
            <TextInput style={[Common.basicShadow, Common.textInput, styles.input]} value={email} onChangeText={setEmail}/>

            <Text style={styles.sectionTitle}>Mot de passe</Text>
            <TextInput style={[Common.basicShadow, Common.textInput, styles.input]} value={password} onChangeText={setPassword}/>

            <BasicButton text={"Se connecter"} onPress={handleSubmit} style={[Common.backgroundPrimary]}/>
        </View>
    )
}

const LoginScreen = () => {
    useEffect(() => {}, [])

    return (
        <View style={[Common.basicPage]}>
            <Image source={image} style={styles.backgroundImage}/>
            <LoginForm />
        </View>
    )
}

export default LoginScreen
