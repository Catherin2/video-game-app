import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from './hooks/useGames'
import GameCard from './components/GameCard';
import CardSkeleton from './components/CardSkeleton';
import GameCardContainer from './components/GameCardContainer';
import { Genre } from './hooks/useGenres';

interface Props {
    filteredGenre: Genre | null
}

const GameGrid = ({ filteredGenre }: Props) => {
    const { data, error, isLoading } = useGames(filteredGenre);
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' gap='4'>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton} >
                        <CardSkeleton />
                    </GameCardContainer>)}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
