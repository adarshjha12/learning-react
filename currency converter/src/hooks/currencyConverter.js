import { useCallback, useState, useEffect } from "react";

const FetchData = () =>{
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
    .then( (res) => res.json())
    .catch( (err) => console.log(err)
    )
}

export default FetchData