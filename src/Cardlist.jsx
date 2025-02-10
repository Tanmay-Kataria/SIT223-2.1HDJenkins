import {
    Flex,
    Box,
} from '@radix-ui/themes'
import Card1 from './card'
import Featuredsomething from './featured-articles'
import Button1 from './button'
import { randMovie, randMovieCharacter, randQuote, randImg } from '@ngneat/falso';

function Cardlist() {
    return (
        <div>

            <Box style={{ margin: '10px' }}>
                <Featuredsomething txt='Featured Articles' />
            </Box>

            <Flex justify='center' display='inline-flex' gap='4' style={{ marginLeft: '15vw' }} wrap='wrap'>
                <Card1
                    img={randImg()}
                    moviename={randMovie()}
                    quote={randQuote()}
                    username={randMovieCharacter()} />

                <Card1
                    img={randImg()}
                    moviename={randMovie()}
                    quote={randQuote()}
                    username={randMovieCharacter()} />

                <Card1
                    img={randImg()}
                    moviename={randMovie()}
                    quote={randQuote()}
                    username={randMovieCharacter()} />

            </Flex>
            <Button1 txt='See all Articles' />

        </div>
    )
}
export default Cardlist