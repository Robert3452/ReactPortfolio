import { useState, useEffect } from 'react';

const getClaims = (API) => {
    const [claims, setClaims] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((result) => result.json())
            .then(data => setClaims(data))
            .catch(error => console.log(error))
    }, [])
    return claims;

}

export default getClaims;