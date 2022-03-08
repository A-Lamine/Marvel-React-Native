import React, { useState, useEffect } from "react"
import { Text, Image, View } from "react-native"
import styled from "styled-components"
function Index({ item: { id, name, thumbnail, description, modified } }) {
    return (
        <Div>
            <Img source={{ uri: thumbnail ? thumbnail.path + "." + thumbnail.extension : "a" }} />
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
