import Image from "next/image"
import PropTypes from "prop-types";
import config from "../../../config"
import Meta from "../../../components/Meta";

const Movie = ({movie: {title, overview, genres, release_date, backdrop_path}}) => {
    return (
        <div className="container mx-w-4xl mx-auto pt-6">
            <Meta title={title}/>

            <div className="px-3">
                <Image
                    className="rounded-md"
                    src={`${config.moviesImageBaseURL}/original${backdrop_path}`}
                    width={1000}
                    height={600}
                />
                <h1 className="font-bold text-xl my-2">{title}</h1>
                <p className=" text-gray-600 text-sm my-4">{overview}</p>
                <p className="my-5 text-gray-600 text-sm"> Genres: <span
                    className="font-bold">{genres.map(genre => genre.name).join(', ')}</span></p>
                <p className="text-gray-600 text-sm"> Release Date: <span className="font-bold">{release_date}</span>
                </p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.string,
    release_date: PropTypes.string,
    backdrop_path: PropTypes.string
}

export default Movie

export async function getStaticProps(context) {
    const {id} = context.params
    const res = await fetch(`${config.moviesBaseURL}/${id}?api_key=${config.moviesApiKey}&language=en-US`)
    const movie = await res.json()

    return {
        props: {movie}
    }
}

export async function getStaticPaths() {
    const res = await fetch(`${config.moviesBaseURL}/popular?api_key=${config.moviesApiKey}&language=en-US&page=1`)
    const {results: movies} = await res.json()

    const ids = movies.map(movie => movie.id)
    const paths = ids.map(id => ({
        params: {
            id: id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}