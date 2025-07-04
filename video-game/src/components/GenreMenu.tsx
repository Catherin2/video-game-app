import { Button, HStack, Image, Link, ListItem, ListRoot, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCropImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  filteredGenre: Genre | null;
}

const GenreMenu = ({ filteredGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <ListRoot>
      {data.map(genre => <ListItem key={(genre.id)} paddingY='6px' listStyleType='none'>
        <HStack>
          <Image
            boxSize='32px'
            borderRadius={8}
            src={getCropImageUrl(genre.image_background)} />
          <Button
            onClick={() => onSelectGenre(genre)}
            as={Link}
            fontWeight={genre.id === filteredGenre?.id ? "bold" : "normal"}
            whiteSpace="normal"
            textAlign="left"
            variant="plain"
            fontSize="lg"
          >
            {genre.name}
          </Button>
        </HStack>
      </ListItem>)}
    </ListRoot>
  )
}

export default GenreMenu
