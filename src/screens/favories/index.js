import React, { useState, useEffect, useContext } from "react"
import Fav from "../../config/contexts/fav"
import { FlatList, TouchableOpacity, View, TextInput } from "react-native"
import CharactersCard from "../../components/charactersCard"
import Auth from "../../config/contexts/auth"
import Fuse from "fuse.js"
import SearchBar from "../../components/search"

function Index({ navigation }) {
    const { listfav } = useContext(Fav)
    const { isOffline } = useContext(Auth)
    const [customSearch, setCustomSearch] = useState("")
    const flatListRef = React.useRef()

    const renderItem = ({ item }) => (
        <>
            {isOffline ? (
                <TouchableOpacity
                    onPress={() => alert("Connectez-vous à internet pour voir les détails")}
                >
                    {fuseSearch.length > 2 ? (
                        <CharactersCard item={item.item} />
                    ) : (
                        <CharactersCard item={item} />
                    )}
                </TouchableOpacity>
            ) : (
                <>
                    {fuseSearch.length > 2 ? (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Details", { id: item.item.id })}
                        >
                            <CharactersCard item={item.item} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Details", { id: item.id })}
                        >
                            <CharactersCard item={item} />
                        </TouchableOpacity>
                    )}
                </>
            )}
        </>
    )

    const fuse = new Fuse(listfav, {
        keys: ["name"],
    })

    const fuseSearch = fuse.search(customSearch)

    return (
        <>
            <SearchBar customSearch={customSearch} setCustomSearch={setCustomSearch} />
            {fuseSearch.length > 2 ? (
                <FlatList
                    ref={flatListRef}
                    data={fuseSearch}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.item.id}
                    initialNumToRender={1}
                    showsHorizontalScrollIndicator={false}
                    numColumns={3}
                />
            ) : (
                <FlatList
                    data={listfav}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    initialNumToRender={1}
                    showsHorizontalScrollIndicator={false}
                    numColumns={3}
                />
            )}
        </>
    )
}

export default Index
