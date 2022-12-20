import Hero from '../components/Hero'
import config from '../config'
import PopularMovie from "../components/PopularMovie";

export default function Home({movies}) {
    return (
        <div className="bg-gray-700">
            <Hero/>
            <PopularMovie movies={movies.results}/>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${config.moviesBaseURL}/popular?api_key=${config.moviesApiKey}&language=en-US&page=1`)
    const movies = await res.json()

    return {
        props: {movies}
    }
}