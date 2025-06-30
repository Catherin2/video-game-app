import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}
const RatingScore = ({ score }: Props) => {
    let color = score > 80 ? 'green' : score > 60 ? 'yellow' : '';
    return (
        <Badge color={color} fontSize='12px' paddingX={2} borderRadius='3px'>
            {score}
        </Badge>
    )
}

export default RatingScore
