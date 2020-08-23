import { useState, useEffect } from 'react';

const getPreDesc = (API) => {
    const [preDesc, setPreDesc] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => setPreDesc(data))
            .catch(error => console.log(error));
    }, []);
    return preDesc;
}

export default getPreDesc;