import { ListItem, ListRoot } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'



const GenreMenu = () => {
  const { data } = useGenres();
  return (
    <ListRoot>
      {data.map(genre => <ListItem key={(genre.id)}>{genre.name}</ListItem>)}
    </ListRoot>
  )
}

export default GenreMenu
