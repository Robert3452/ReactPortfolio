import { useState, useEffect } from 'react';
import default_handler from '../../handlers/errorsHandlers';


const getUser = (API) => {
    const [user, setUser] = useState({});

    //UseEffect para llamar a la api
    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                if (data.type == "error") return setUser(default_handler.default_user)
                return setUser(data)
            })
            .catch(error => {
                console.error(error);
            })

    }, []);
    return user
}

export default getUser;