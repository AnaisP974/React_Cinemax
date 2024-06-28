interface Card {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
}


interface Movies {
    movies: Card[];
}

export default function Card({ movies }: Movies) {
    return (
        <section className="flex flex-wrap justify-around">
        
            {movies.map((movie) => (
                <div className="card m-1 transition-shadow duration-200 ease-in-out " key={movie.imdbID}>
                    <div className="card-body">
                        <figure>
                            <img 
                            src={
                                movie.Poster ? movie.Poster : `https://placeholder.co/330x430/orange/white?text=${movie.Title}`
                            } 
                            alt={movie.Title} 
                            className="" 
                            />
                            <figcaption>{movie.Title} <i>{movie.Year}</i> </figcaption>
                        </figure>
                    </div>
                </div>
            ))}
        
        </section>
        
    )
}