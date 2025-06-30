import { CardBody, CardRoot, Skeleton, SkeletonText } from '@chakra-ui/react'


const CardSkeleton = () => {
    return (
        <CardRoot>
            <Skeleton height='200px' />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </CardRoot>
    )
}

export default CardSkeleton
