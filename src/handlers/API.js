const uri = process.env.BASE_URL;


const API_URLS = {
    getProfile: `${uri}/profile/user`,
    getPreDesc: `${uri}/pre-desc`,
    getSkills: `${uri}/skills`
}

export default API_URLS;