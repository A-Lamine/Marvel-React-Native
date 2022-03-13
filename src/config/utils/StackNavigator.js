import React, { useContext, useEffect } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../../screens/login"
import Details from "../../screens/details"
import Auth from "../contexts/auth"
import TabNavigator from "./tab"

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()

    const { isLoggedIn, setIsOffline, isOffline } = useContext(Auth)
    console.log(isOffline)
    return (
        <Stack.Navigator>
            {isLoggedIn ? (
                <Stack.Group>
                    <Stack.Screen
                        name="TabNavigator"
                        component={TabNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name="Details" component={Details} />
                </Stack.Group>
            ) : (
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
            )}
        </Stack.Navigator>
    )
}
export default StackNavigator
