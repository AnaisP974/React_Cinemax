interface Card {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
}


interface Movies {
    movies: Card[];
}

const racourcir = (mot: string) => {
    if (mot.length > 15) {
        return mot.slice(0, 15) + "...";
    }
    return mot;
}

export default function Card({ movies }: Movies) {
    return (
        <section className="flex flex-wrap justify-center gap-6 w-5/6 m-auto">
        
            {movies.map((movie) => 
            (
               
                <a href={"https://www.imdb.com/title/" + movie.imdbID} target="_blank">
                <article className="card p-1 border-gray-500 round hover:scale-110 bg-gray-500 p-2 rounded" key={movie.imdbID}>
                    <figure>
                        <img 
                          src={movie.Poster ? movie.Poster : `https:laceholder.co/330x430/orange/white?text=${movie.Title}`} 
                          alt={movie.Title} 
                          className="object-contain h-56" 
                        />
                        <figcaption>{racourcir(movie.Title)} <br /> (<i>{movie.Year}</i>) </figcaption>
                    </figure>
                    
                </article>
                </a>
                
            ))}
        
        </section>
        
    )
}