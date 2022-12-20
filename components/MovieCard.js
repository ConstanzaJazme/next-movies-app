import Image from "next/image"
import Link from "next/link"
import config from "../config";
import PropTypes from "prop-types";

const MovieCard = ({movie: {id, title, release_date, poster_path}}) => {
    return (
        <Link href={`/movie/${id}`}>
            <div className="bg-white shadow-sm rounded-md cursor-pointer">
                <Image
                    className="rounded-t-md"
                    src={`${config.moviesImageBaseURL}/w500${poster_path}`}
                    width={700}
                    height={800}
                />
                <div className="px-6 py-2">
                    <div className="font-bold text-xl mb-1">{title}</div>
                    <p className="text-gray-700 text-base mb-1">{release_date}</p>
                </div>
            </div>
        </Link>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        poster_path: PropTypes.string,
    })
}
export default MovieCard