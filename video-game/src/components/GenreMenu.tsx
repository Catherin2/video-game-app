import useGenres from '../hooks/useGenres'



const GenreMenu = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map(genre => <li key={(genre.id)}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreMenu
