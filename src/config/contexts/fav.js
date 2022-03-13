import React, { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Fav = createContext({
    listfav: [],
    setListFav: () => {},
    addorremove: () => {},
})

export const FavProvider = ({ children }) => {
    const [listfav, setListFav] = useState([])

    const verfyFav = async () => {
        const fav = await AsyncStorage.getItem("fav")
        fav && setListFav(JSON.parse(fav))
    }

    useEffect(() => {
        verfyFav()
    }, [])

    const addorremove = (item) => {
        const existe = listfav.findIndex((element) => element.id === item.id)

        if (existe !== -1) {
            setListFav(listfav.filter((element) => element.id !== item.id))
        } else {
            setListFav([...listfav, item])
        }
    }
    useEffect(() => {
        AsyncStorage.setItem("fav", JSON.stringify(listfav))
    }, [listfav])

    const context = {
        listfav,
        setListFav,
        addorremove,
    }
    return <Fav.Provider value={context}>{children}</Fav.Provider>
}

export default Fav
