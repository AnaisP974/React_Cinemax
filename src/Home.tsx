import './styles.css'
import Card from './component/Card.tsx';
import { useState } from 'react';

export default function Home() {

  const [listMovies, setListMovies] = useState([]);

const [query, setQuery] = useState("")
const [error, setError] = useState("")
console.log(error);
const searchMovie = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault() // On limite le formulaire à la soumission
if (query.trim().length > 2) {
  setError("Merci de tapez un mot-clé de 3 caractères minimum")
} // Si le champ est vide ou trop court on affiche une erreur

const url = `http://www.omdbapi.com/?apikey=3a097856&s=${query}`
try {
  const res = await fetch(url) // On fetch l'API OMDB
  const data = await res.json() // On récupère les données et les converti
  if (data.Response === "False") { // S'il n'y a pas de résultat
    setListMovies([]) // Le tableau est vide
  } else { // S'il y a un résultat
    setListMovies(data.Search) // On l'ajoute au tableau
  }
} catch (err) {
  setError("Une erreur est survenue lors votre recherche")
}
}
  return (
    <main className='text-center'> 
      <div className="text-center p-8">
        <h1 className='font-bold text-6xl text-center'>CINEMAX</h1>
        <p>Trouver les infos de films et de séries en 2 clics !</p>
      </div>

      <form onSubmit={searchMovie} className="text-center p-8">
        <input type="text" className='p-1.5 text-slate-900 border-none rounded-full text-center' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} placeholder='Entrez votre recherche' /> <br />
        <button className='m-2 border py-1.5 px-3 rounded-full hover:bg-bluesky-500' type='submit'>Rechercher</button>
      </form>

      {
        listMovies.length > 0 ? <Card movies={listMovies} /> : "Aucun résultat"
      }
    </main>
  )
}


