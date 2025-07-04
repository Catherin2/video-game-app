import useData from './useData';
import { Genre } from './useGenres';


export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
}


const useGames = (filteredGenre: Genre | null) => useData<Game>('/games',
    { params: { geners: filteredGenre?.id } }, [filteredGenre?.id,]
);



export default useGames
