import { useState, useEffect } from 'react';

const getHitos = (API) => {
    const [hitos, sethitos] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((result) => result.json())
            .then(data => sethitos(data))
            .catch(error => console.log(error))
    }, [])
    return hitos;

}

export default getHitos;