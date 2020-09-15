import api from '../handlers/API';
import axios from 'axios';


export const request = section => ({
    type: "REQUEST_DATA",
    section
})


export const receive = (section, data) => ({
    type: "RECEIVED_DATA",
    section,
    data
});

export const fetchUser = () => {
    const section = 'user';
    return (dispatch) => {
        dispatch(request(section))
        axios.get(`${api.get.profile}`)
            .then(({ data }) => dispatch(receive(section, data)))
            .catch(error => dispatch(setError(error)));
    }
};

export const fetchClaims = () => {
    const section = 'claims';
    return (dispatch) => {
        dispatch(request(section))
        axios.get(`${api.get.claims}`)
            .then(({ data }) => dispatch(receive(section, data)))
            .catch(error => dispatch(setError(error)))
    }
}
export const fetchPredesc = () => {
    const section = "preDesc"
    return (dispatch) => {
        dispatch(request(section))
        axios.get(`${api.get.preDesc}`)
            .then(({ data }) => {
                return dispatch(receive(section, data))
            })
            .catch(error => dispatch(setError(error)));
    }
};

export const fetchPortfolio = () => {
    const section = "works"
    return (dispatch) => {
        dispatch(request(section))
        axios.get(`${api.get.works}`)
            .then(({ data }) => dispatch(receive(section, data)))
            .catch(error => dispatch(setError(error)))
    }
}

export const fetchSkills = () => {
    const section = "skills";
    return (dispatch) => {
        dispatch(request(section))
        axios.get(`${api.get.skills}`)
            .then(({ data }) => {
                // console.log(data);
                return dispatch(receive(section, data))
            })
            .catch(error => dispatch(setError(error)));
    }
}

export const fetchHitos = () => {
    const section = "hitos";
    return (dispatch) => {
        dispatch(request(section))
        axios.get(`${api.get.hitos}`)
            .then(({ data }) => {
                return dispatch(receive(section, data))
            })
            .catch(error => dispatch(setError(error)));
    }
}

export const fetchAbout = () => {
    const section = "about";
    return (dispatch) => {
        dispatch(request(section))
        axios.get(`${api.get.about}`)
            .then(({ data }) => {
                return dispatch(receive(section, data))
            })
            .catch(error => dispatch(setError(error)));
    }
}




export const setError = payload => ({
    type: "SET_ERROR",
    payload
});

