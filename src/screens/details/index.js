import React, { useState, useEffect } from "react"
import axios from "axios"
import MD5 from "crypto-js/md5"
import DetailsCard from "../../components/detailsCard"
import envs from "../../config/env"

function Index({ route }) {
    const [data, setData] = useState([])
    const { PUBLIC_KEY, PRIVATE_KEY, API_BACKEND } = envs
    const ts = new Date().getTime()
    const stringToHash = ts + PRIVATE_KEY + PUBLIC_KEY
    const hash = MD5(stringToHash).toString()
    const url =
        API_BACKEND +
        "/" +
        route.params.id +
        "?" +
        "ts=" +
        ts +
        "&apikey=" +
        PUBLIC_KEY +
        "&hash=" +
        hash

    useEffect(() => {
        axios.get(url).then(function (response) {
            setData(response.data.data.results[0])
        })
    }, [])

    return <DetailsCard item={data} />
}

export default Index
