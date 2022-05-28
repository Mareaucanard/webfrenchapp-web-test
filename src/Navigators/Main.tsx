import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, ArticleListPage, ArticlePage } from '@/Containers'

const LoginStack = createStackNavigator()

const MainNavigator = () => {
    return (
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
            <LoginStack.Screen name="ArticleListPage" component={ArticleListPage} />
            <LoginStack.Screen name="ArticlePage" component={ArticlePage} />
        </LoginStack.Navigator>
    )
}

export default MainNavigator
