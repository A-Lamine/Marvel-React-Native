import React from "react"
import styled from "styled-components"
function Index({ item: { name, thumbnail } }) {
    return (
        <Div>
            <Img source={{ uri: thumbnail.path + "." + thumbnail.extension }} />
            <H1>{name}</H1>
        </Div>
    )
}

const Div = styled.View`
    display: flex;
    flex-direction: column;
    width: 110px;
    height: 201px;
    align-items: center;
    background-color: #e8eaed;
    margin-top: 20px;
    margin-left: 15px;
    border-radius: 40px;
`
const Img = styled.Image`
    width: 100%;
    height: 140px;
    border-radius: 40px;
`
const H1 = styled.Text`
    color: black;
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
`

export default Index
