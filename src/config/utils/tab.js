import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Characters from "../../screens/characters"
import Favories from "../../screens/favories"
import Settings from "../../screens/settings"
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons"
import Auth from "../contexts/auth"

const TabNavigator = ({ navigation }) => {
    const Tab = createBottomTabNavigator()
    const { isLoggedIn, setIsOffline, isOffline } = useContext(Auth)
    return (
        <Tab.Navigator>
            {isOffline ? (
                (alert("Vous êtes hors conexion"),
                (
                    <Tab.Group>
                        <Tab.Screen
                            name="Favories"
                            component={Favories}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons
                                        name="star-outline"
                                        color={color}
                                        size={size}
                                    />
                                ),
                                tabBarLabel: "Mes Favories",
                            }}
                        />
                    </Tab.Group>
                ))
            ) : (
                <Tab.Group>
                    <Tab.Screen
                        name="Characters"
                        component={Characters}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            ),
                            tabBarLabel: "Characters",
                        }}
                    />
                    <Tab.Screen
                        name="Favories"
                        component={Favories}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="star-outline"
                                    color={color}
                                    size={size}
                                />
                            ),
                            tabBarLabel: "Mes Favories",
                        }}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            ),
                            tabBarLabel: "Settings",
                        }}
                    />
                </Tab.Group>
            )}
        </Tab.Navigator>
    )
}

export default TabNavigator
