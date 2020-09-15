const uri = process.env.BASE_URL;


const API_URLS = {
    get: {
        profile: `${uri}/profile/user`,
        preDesc: `${uri}/pre-desc`,
        skills: `${uri}/skills`,
        claims: `${uri}/claims`,
        works: `${uri}/works`,
        hitos: `${uri}/hitos`,
        about: `${uri}/about`
    }
}

export default API_URLS;