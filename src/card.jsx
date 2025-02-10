import {
    Box,
    Text,
    Flex,
    Separator,
    Card,
    Inset,
    Quote
} from "@radix-ui/themes";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { randNumber } from '@ngneat/falso';

function Card1(props) {
    return (
        <Box maxWidth='340px'>
            <Card size='2'>
                <Inset clip='padding-box' side='top' pb='current'>
                    <img
                        src={props.img}
                        alt='movie-poster'
                        style={{
                            display: 'block',
                            height: '40%',
                            width: '340px',
                            backgroundColor: 'var(--gray-5)',
                        }} />

                </Inset>

                <Text size='5' as='div' weight='bold' align='center'>
                    {props.moviename}
                </Text>

                <Text>
                    <Quote>{props.quote}</Quote>
                </Text>

                <Separator orientation='horizontal' my='2' color='gray' size='4'></Separator>

                <Flex justify='between' gap='4'>

                    <Text>
                        <StarFilledIcon></StarFilledIcon>
                        {randNumber({ min: 3, max: 5, precision: 1 })}
                    </Text>

                    <Text>
                        {props.username}
                    </Text>
                </Flex>
            </Card>
        </Box>
    )
}

export default Card1