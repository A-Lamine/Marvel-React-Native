import React, { useState, useEffect, useContext } from "react"
import Icon from "react-native-vector-icons/Ionicons"
import styled from "styled-components"
import Fav from "../../config/contexts/fav"

function Index({ item }) {
    const { id, name, thumbnail, description, modified } = item
    const { addorremove, listfav } = useContext(Fav)

    const isFav = listfav.filter((favItem) => favItem.id === id)

    return (
        <Div>
            <Favo onPress={() => addorremove(item)}>
                {isFav.length !== 0 ? (
                    <>
                        <H1>Supprimer De Mes Favoris </H1>
                        <Icon name="heart" size={32} color="red" />
                    </>
                ) : (
                    <>
                        <H1>Ajouter à Mes Favoris </H1>
                        <Icon name="heart-outline" size={32} color="red" />
                    </>
                )}
            </Favo>
            <Img source={{ uri: `${thumbnail?.path}.${thumbnail?.extension}` }} />
            <Div>
                <Span>
                    <H1>ID : </H1>
                    <P> {id}</P>
                </Span>
                <Span>
                    <H1>Nom : </H1>
                    <P>{name}</P>
                </Span>
                <Span>
                    <H1>Derniere Modification : </H1>
                    <P>{modified}</P>
                </Span>
                {description ? (
                    <Span>
                        <H1>Description : </H1>
                        <P>{description}</P>
                    </Span>
                ) : null}
            </Div>
        </Div>
    )
}
const Img = styled.Image`
    width: 100%;
    height: 350px;
`
const Favo = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background-color: wheat;
    height: 50px;
    width: 250px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 20px;
`
const Div = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #e8eaed;
`
const Span = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px;
`
const H1 = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: black;
`
const P = styled.Text`
    font-size: 15px;
    font-weight: bold;
    display: flex;
    width: 70%;
`
export default Index
