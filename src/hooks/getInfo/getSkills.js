import { useState, useEffect } from 'react'

const getSkills = (API) => {

    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch(API)
            .then((result) => result.json())
            .then((data) => setSkills(data))
            .catch((error) => console.log(error));
    }, [])
    return skills;

} 

export default getSkills;