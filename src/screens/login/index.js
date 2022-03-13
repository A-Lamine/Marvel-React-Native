import React, { useState, useContext } from "react"
import styled from "styled-components"
import Input from "../../components/input"
import Marvel_Logo from "../../../public/Marvel_Logo.png"
import Auth from "../../config/contexts/auth"

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" })
    const { login } = useContext(Auth)

    const [userEror, setUserEror] = useState(false)
    const [passwordEror, setPasswordEror] = useState(false)

    const Connexion = () => {
        if (user.email.length < 3) {
            setPasswordEror(false)
            setUserEror(true)
            alert("Le UserName doit contenir au minimum 3 caractères")
        } else if (user.password.length < 8) {
            setPasswordEror(true)
            setUserEror(false)
            alert("Le Mot de Passe doit contenir au minimum 8 caractères")
        } else {
            login(user.email, user.password)
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
                <Div2>
                    <H1 size="30px" color="white" weight="bold" bottom="0px">
                        Login
                    </H1>
                    <Input
                        secu={false}
                        placeholder="Email"
                        onChangeText={(email) => setUser({ ...user, email })}
                        name="email"
                    />
                    {userEror ? (
                        <H1 size="10px" color="#f4d03f" weight="normal" bottom="10px">
                            Le UserName doit contenir au minimum 3 caractères
                        </H1>
                    ) : null}
                    <Input
                        secu={true}
                        placeholder="Password"
                        onChangeText={(password) => setUser({ ...user, password })}
                        name="password"
                    />
                    {passwordEror ? (
                        <H1 size="10px" color="#f4d03f" weight="normal" bottom="10px">
                            NB : Le Mot de Passe doit contenir au minimum 8 caractères
                        </H1>
                    ) : null}

                    <Btn onPress={() => Connexion()}>
                        <H1 size="20px" color="white" weight="bold" bottom="0px">
                            Connexion
                        </H1>
                    </Btn>

                    {/* <Button title="Afficher le token" onPress={() => get()} /> */}
                </Div2>
            </Div>
        </>
    )
}

const Div = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #ec7063;
    padding: 10px;
`
const Div2 = styled.View`
    background-color: #e74c3c;
    width: 100%;
    height: 340px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 50px;
    justify-content: space-around;
`
const Img = styled.Image`
    width: 250px;
    height: 90px;
    border-radius: 20px;
    margin-top: 50px;
`
const H1 = styled.Text`
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
    margin-bottom: ${(props) => props.bottom};
    padding: 10px;
`
const Btn = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    background-color: #cb4335;
    border-radius: 20px;
    width: 150px;
    height: 50px;
`

export default Login
