import {
    Flex,
    TextField,
    Button,
    Heading,
    Separator
} from "@radix-ui/themes";

function Subscribe() {
    return (
        <div style={{ marginBottom: '7px' }}>
            <Separator my='3' size='4'></Separator>
            <Flex align='end' gap='6' wrap='wrap' justify='center'>

                <Heading>
                    SIGN UP FOR OUR DAILY INSIDER
                </Heading>

                <TextField.Root placeholder="Enter your Email" radius='medium' variant='soft' style={{ width: '60vw' }}>
                    <TextField.Slot side="right">
                        <Button variant="solid" highContrast size="1" asChild>
                            <a href="#">
                                Subscribe
                            </a>
                        </Button>
                    </TextField.Slot>
                </TextField.Root>
            </Flex>
        </div>

    )
}

export default Subscribe
