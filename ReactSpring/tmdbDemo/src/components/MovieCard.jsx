export default function MovieCard({movie})
{
    const {title, overview, vote_average, poster_path} = movie;
    const posterImage = `https://image.tmdb.org/t/p/w185${poster_path}`;
    return (
        <div style={{border:"red 3px solid"}}>
            <h1>{title}</h1>
            <img src={posterImage} alt=""/>
            <p>{overview}</p>
            <p>{vote_average}</p>
        </div>
    )
}