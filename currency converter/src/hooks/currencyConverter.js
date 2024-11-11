import {useState, useEffect } from "react";

const FetchCurrencyData = (currency) =>{
    const [data, setData] = useState({})
    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then( (res) => res.json())
        .then( () => setData(res[currency]))
        .catch( (err) => console.log(err)
    )
    }, [currency])
    console.log(data);
    
    return data
}

export default FetchCurrencyData