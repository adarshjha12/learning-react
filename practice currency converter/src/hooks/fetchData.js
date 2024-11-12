import { useEffect, useState } from "react";

const FetchCurrency = (currency) => {
let [data, setData] = useState({})

    useEffect( () => {

          fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then( (res) => setData(res[currency]))
        .catch((e) => console.error(e)
        )
    }, [currency])
    return data
}

export default FetchCurrency