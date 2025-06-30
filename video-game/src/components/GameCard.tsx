import { Game } from '../hooks/useGames'
import { Card, CardBody, CardRoot, Heading, HStack, Image } from '@chakra-ui/react'
import RatingScore from './RatingScore'


interface Props {
  game: Game
}
const GameCard = ({ game }: Props) => {
  return (
    <CardRoot >
      <Image src={game.background_image} />
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
