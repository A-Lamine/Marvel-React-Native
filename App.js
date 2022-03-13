import React, { useContext, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from "react-native"
import StackNavigator from "./src/config/utils/StackNavigator"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Auth, { AuthProvider } from "./src/config/contexts/auth"
import { FavProvider } from "./src/config/contexts/fav"

const App = () => {
    const isDarkMode = useColorScheme() === "dark"

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    return (
        <AuthProvider>
            <FavProvider>
                <NavigationContainer>
                    {/*   <SafeAreaView style={backgroundStyle}> */}
                    <StatusBar
                        barStyle={isDarkMode ? "light-content" : "dark-content"}
                        backgroundColor="#ec7063"
                    />
                    <StackNavigator />
                    {/* </SafeAreaView> */}
                </NavigationContainer>
            </FavProvider>
        </AuthProvider>
    )
}

const styles = StyleSheet.create({})

export default App
