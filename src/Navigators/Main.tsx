import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, ArticleListPage } from '@/Containers'

const LoginStack = createStackNavigator()

const MainNavigator = () => {
    return (
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
            <LoginStack.Screen name="ArticleListPage" component={ArticleListPage} />
        </LoginStack.Navigator>
    )
}

export default MainNavigator
