import { Game } from '../hooks/useGames'
import { CardBody, CardRoot, Heading, HStack, Image } from '@chakra-ui/react'
import RatingScore from './RatingScore'
import getCropImageUrl from '../services/image-url'


interface Props {
  game: Game
}
const GameCard = ({ game }: Props) => {
  return (
    <CardRoot >
      <Image src={getCropImageUrl(game.background_image)} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent='right'>
          <RatingScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </CardRoot>
  )
}

export default GameCard
