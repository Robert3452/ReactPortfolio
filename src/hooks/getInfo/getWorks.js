import { useState, useEffect } from 'react';

const getWorks = (API) => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch(API)
            .then(result => result.json())
            .then(data => setWorks(data))
            .catch(error => console.log(error))
    }, [])
    return works;
}

export default getWorks;