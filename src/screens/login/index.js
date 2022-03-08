import React, { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import styled from "styled-components"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TextInput,
    Image,
} from "react-native"
import axios from "axios"
import Input from "../../components/input"
import Marvel_Logo from "../../../public/Marvel_Logo.png"
import { API_LOGIN } from "../../config/env"

const Login = ({ navigation }) => {
    const [user, setUser] = useState({ email: "", password: "" })

    const [userEror, setUserEror] = useState(false)
    const [passwordEror, setPasswordEror] = useState(false)
    const Connexion = () => {
        if (user.email.length < 3) {
            AsyncStorage.removeItem("token")
            setPasswordEror(false)
            setUserEror(true)
            alert("Le UserName doit contenir au minimum 3 caractères")
        } else if (user.password.length < 8) {
            AsyncStorage.removeItem("token")
            setPasswordEror(true)
            setUserEror(false)
            alert("Le Mot de Passe doit contenir au minimum 8 caractères")
        } else {
            axios
                .post(API_LOGIN, {
                    username: user.email,
                    password: user.password,
                })
                .then(function (res) {
                    setMessage(false)
                    res.headers["x-access-token"]
                        ? (AsyncStorage.setItem("token", res.headers["x-access-token"]),
                          navigation.navigate("Characters"))
                        : AsyncStorage.removeItem("token")
                })
        }
    }

    /*     const Connexion = () => {
        try {
            AsyncStorage.setItem("lamine", "qsd")
            console.log("ajouter")
        } catch (error) {
            console.log("error")
        }
    } */

    /*     const get = async () => {
        try {
            const value = await AsyncStorage.getItem("token")
            if (value !== null) {
                alert(value)
                console.log(value)
            }
        } catch (error) {
             Error retrieving data
        }
    }
 */
    return (
        <>
            <Div>
                <Img source={Marvel_Logo} />
                <Div>
                    <Input
                        secu={false}
                        placeholder="Email"
                        onChangeText={(email) => setUser({ ...user, email })}
                        name="email"
                    />
                    {userEror ? <H1>Le UserName doit contenir au minimum 3 caractères</H1> : null}
                    <Input
                        secu={true}
                        placeholder="Password"
                        onChangeText={(password) => setUser({ ...user, password })}
                        name="password"
                    />
                    {passwordEror ? (
                        <H1>NB : Le Mot de Passe doit contenir au minimum 8 caractères</H1>
                    ) : null}
                    <Button title="Connexion" onPress={() => Connexion()} />
                    {/* <Button title="Afficher le token" onPress={() => get()} /> */}
                </Div>
            </Div>
        </>
    )
}

const Div = styled.View`
    width: 100%;
    margin-bottom: 10px;
    border: 1px black;
    color: black;
    border-radius: 10px;
    padding: 10px;
`
const Img = styled.Image`
    width: 200px;
    height: 70px;
`
const H1 = styled.Text`
    color: red;
    margin-bottom: 10px;
    padding: 10px;
`

export default Login
