const constants = {
    moviesBaseURL: 'https://api.themoviedb.org/3/movie',
    moviesImageBaseURL: 'https://image.tmdb.org/t/p'
}

const env = {
    moviesApiKey: process.env.MOVIES_API_KEY
}

export default {
    ...constants,
    ...env,
}