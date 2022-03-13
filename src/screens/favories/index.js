import React, { useContext } from "react"
import Fav from "../../config/contexts/fav"
import { FlatList, TouchableOpacity, View } from "react-native"
import CharactersCard from "../../components/charactersCard"
import Auth from "../../config/contexts/auth"

function Index({ navigation }) {
    const { listfav } = useContext(Fav)
    const { isOffline } = useContext(Auth)
    const renderItem = ({ item }) => (
        <>
            {isOffline ? (
                <TouchableOpacity
                    onPress={() => alert("Connectez-vous à internet pour voir les détails")}
                >
                    <CharactersCard item={item} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => navigation.navigate("Details", { id: item.id })}>
                    <CharactersCard item={item} />
                </TouchableOpacity>
            )}
        </>
    )

    return (
        <>
            <FlatList
                data={listfav}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                initialNumToRender={1}
                showsHorizontalScrollIndicator={false}
                numColumns={3}
            />
        </>
    )
}

export default Index
