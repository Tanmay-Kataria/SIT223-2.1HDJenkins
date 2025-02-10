import {
    Flex,
    Box,
} from '@radix-ui/themes'
import Card1 from './card'
import Featuredsomething from './featured-articles'
import Button1 from './button'
import { randImg, randMovie, randFullName, randQuote } from '@ngneat/falso'
function Itemlist() {
    return (
        <div>

            <Box style={{ marginTop: '40px', marginBottom: '10px' }}>
                <Featuredsomething txt='Featured Tutorials' />
            </Box>

            <Flex justify='center' display='inline-flex' gap='4' style={{ marginLeft: '15vw' }} wrap='wrap'>
                <Card1
                    img={randImg()}
                    moviename={randMovie()}
                    quote={randQuote()}
                    username={randFullName({ withAccents: false })} />

                <Card1
                    img={randImg()}
                    moviename={randMovie()}
                    quote={randQuote()}
                    username={randFullName({ withAccents: false })} />

                <Card1
                    img={randImg()}
                    moviename={randMovie()}
                    quote={randQuote()}
                    username={randFullName({ withAccents: false })} />

            </Flex>
            <Button1 txt='See all Tutorials' />

        </div>
    )
}

export default Itemlist