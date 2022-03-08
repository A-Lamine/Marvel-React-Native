import React from "react"
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

import { Colors } from "react-native/Libraries/NewAppScreen"
import Login from "./src/screens/login"
import Characters from "./src/screens/characters"
import Details from "./src/screens/details"
const App = () => {
    const isDarkMode = useColorScheme() === "dark"

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            {/*   <SafeAreaView style={backgroundStyle}> */}
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor="red"
            />
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Characters"
                    component={Characters}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
            {/* </SafeAreaView> */}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

export default App
