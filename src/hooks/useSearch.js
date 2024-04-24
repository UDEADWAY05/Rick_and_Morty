import axios from "axios";
import { useEffect, useState } from "react";

export function useSearch(query, pageNumber, URL) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [element, setElement] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => { 
      setElement([])
    },[query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: "GET",
            url: URL,
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken((c) => cancel = c)
        }).then((res) => { 
            setElement((prevState) => {
                return [...prevState, ...res.data.results]
            })
            setHasMore(pageNumber < res.data.info.pages)
            setLoading(false)
        }).catch((e) => {
            if (axios.isCancel(e)) {
                return;
            }
            setError(true)
            console.error(e)
        })

        return () => cancel()
    }, [query, pageNumber])
    
    return {
        loading,
        element,
        error,
        hasMore
    };
}