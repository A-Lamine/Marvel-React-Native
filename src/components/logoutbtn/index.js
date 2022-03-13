import React, { useContext } from "react"
import styled from "styled-components"
import Auth from "../../config/contexts/auth"
import Icon from "react-native-vector-icons/Ionicons"
const Index = () => {
    const { logout } = useContext(Auth)

    return (
        <Btn onPress={logout}>
            <Icon name="log-out" size={20} color="white" />
            <H1>Se Déconnecter</H1>
        </Btn>
    )
}

const Btn = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    background-color: red;
    width: 45%;
    margin: auto;
    border-radius: 20px;
    justify-content: center;
`
const H1 = styled.Text`
    font-size: 15px;
    color: white;
    font-weight: bold;
    margin-left: 5px;
`

export default Index
