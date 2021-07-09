import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState(true);
    const [error, setError] = useState([null]);

    useEffect(() => {
        fetch(url)
        .then (res =>{
            if (!res.ok){
                setError("There was an error requesting data")
                setData(null)
                throw Error("There was an error requesting data");
            }
            return res.json();
        })
        .then (x => {
            setData(x);
            setError(null);
            setLoadingMessage(false);
        })

        .catch(err => {
            setLoadingMessage(false)
            console.log(err.message);
        }, [url])

    });

    return {data, loadingMessage, error}
}

export default useFetch;