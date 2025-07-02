import { HStack, Image, ListItem, ListRoot, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCropImageUrl from '../services/image-url';



const GenreMenu = () => {
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
          <Text fontSize='lg'>
            {genre.name}
          </Text>
        </HStack>
      </ListItem>)}
    </ListRoot>
  )
}

export default GenreMenu
