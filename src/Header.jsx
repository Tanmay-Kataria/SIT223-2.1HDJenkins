import '@radix-ui/themes/styles.css';
import { Flex, Box, Button, Separator, Heading } from "@radix-ui/themes";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Header() {
    return (
        <div>
            <Flex align={"end"} gap="4" wrap="wrap">
                <Heading weight="bold" as='h1' size='7'>DEV @DEAKIN</Heading>
                <Box width={{ initial: '500px', sm: '300px', lg: '70vw' }}>
                    <TextField.Root placeholder="Search the docs…" variant="soft" radius='large'>
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                        <TextField.Slot side="right">

                        </TextField.Slot>
                    </TextField.Root>
                </Box>
                <Button variant="soft" side="right" highContrast size="2" asChild>
                    <a href="#">Post</a>
                </Button>
                <Button size='2' variant="classic" asChild radius='large' highContrast>
                    <a href="#">Log In</a>
                </Button>
            </Flex>
            <Separator decorative my='1' size='4'></Separator>
        </div>
    )
}

export default Header