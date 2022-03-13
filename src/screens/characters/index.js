import axios from "axios"
import React, { useState, useEffect, useContext } from "react"
import MD5 from "crypto-js/md5"
import styled from "styled-components"
import { FlatList, TouchableOpacity, View, ActivityIndicator } from "react-native"
import CharactersCard from "../../components/charactersCard"
import envs from "../../config/env"

function Characters({ navigation }) {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const [indice, setIndice] = useState(1)
    const { PUBLIC_KEY, PRIVATE_KEY, API_BACKEND } = envs
    const ts = new Date().getTime()
    const stringToHash = ts + PRIVATE_KEY + PUBLIC_KEY
    const hash = MD5(stringToHash).toString()
    const flatListRef = React.useRef()

    const url =
        API_BACKEND +
        "?" +
        "ts=" +
        ts +
        "&apikey=" +
        PUBLIC_KEY +
        "&hash=" +
        hash +
        "&limit=99&offset=" +
        page
    useEffect(() => {
        setData([])
        setLoading(true)
        axios.get(url).then(function (response) {
            setData(response.data.data.results)
            setLoading(false)
        })
    }, [page])

    const handleNextPage = () => {
        setIndice(indice + 1)
        setPage(page + 99)
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    const handlePreviousPage = () => {
        setIndice(indice - 1)
        setPage(page - 99)
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    const renderItem = ({ item }) => (
        <>
            <TouchableOpacity onPress={() => navigation.navigate("Details", { id: item.id })}>
                <CharactersCard item={item} />
            </TouchableOpacity>
        </>
    )
    const renderFooter = () => (
        <>
            {loading && <ActivityIndicator size={30} style={{ padding: 20 }} />}
            <Div>
                {indice > 1 ? (
                    <TouchableOpacity onPress={handlePreviousPage}>
                        <P>&larr; Page Précédente</P>
                    </TouchableOpacity>
                ) : null}
                <P>{indice}</P>
                <TouchableOpacity onPress={handleNextPage}>
                    <P>Page Suivante &rarr;</P>
                </TouchableOpacity>
            </Div>
        </>
    )

    return (
        <>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                initialNumToRender={1}
                showsHorizontalScrollIndicator={false}
                numColumns={3}
                ListFooterComponent={renderFooter}
            />
        </>
    )
}

const Div = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
`
const P = styled.Text`
    color: blue;
    font-style: italic;
`
export default Characters
