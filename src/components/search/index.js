import React from "react"
import styled from "styled-components"
import Inputstyle from "../input"
import Icon from "react-native-vector-icons/Ionicons"
function Index({ customSearch, setCustomSearch }) {
    return (
        <Div>
            <Inputstyle
                placeholder="Search"
                value={customSearch}
                onChangeText={(e) => setCustomSearch(e)}
            />
        </Div>
    )
}

const Div = styled.View`
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
`

export default Index
