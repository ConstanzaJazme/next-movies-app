import Head from "next/head"
import PropTypes from "prop-types";

const Meta = ({keywords, description, title}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="keywords" content={keywords}/>
            <meta description="description" content={description}/>
            <meta charSet="utf-8"/>
            <link rel="stylesheet" href="/favicon.ico"/>
            <title>{title}</title>
        </Head>
    )
}

export default Meta

Meta.defaultProps = {
    keywords: 'movie app, free movies, popular movies',
    description: 'watch movie for free',
    title: 'WatchMe',
}

Meta.propTypes = {
    keywords: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
}