import axios from "axios"
import { useEffect, useState } from "react"

export function useFetch(url) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [newArray, setNewArray] = useState([])

    async function fetchArray(object) {
        setNewArray([])
        object.episode.map(async (url) => {
            const res = await axios.get(url).then((res) => { return res.data })
            setNewArray(prevState => [...prevState, res])
        });
    }

    useEffect(() => {
        if (data !== undefined && newArray.length === data.episode.length) {
            const newData = { ...data, episode: newArray }
            setData(newData)
            setIsLoading(false)
        };
    }, [newArray])

    async function fetchFunc(url) {
        setIsLoading(true)
        try {
            const res = await axios.get(url).then((res) => { return res.data })
            
            if (res.gender && res.episode ) {
                fetchArray(res)
            }
            setData(res)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        }
    }



    useEffect(() => {
        fetchFunc(url)
    }, [url])

    return {
        data,
        isLoading,
        error
    }
}