import { DiscordLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import {
    Flex,
    Text,
    Theme,
    Heading,
    Grid,
} from "@radix-ui/themes";

function Footer() {
    return (
        <Theme style={{ background: '#23272a' }}>
            <Grid columns='3' width='auto' style={{ minHeight: '150px' }} justify='center'>

                <Flex direction='column' gap='2' align='start' style={{ textAlign: 'left', paddingLeft: '15px', marginTop: '27px' }}>
                    <Heading style={{ paddingBottom: '5px' }}>
                        Explore
                    </Heading>
                    <Text>Home</Text>
                    <Text>Questions</Text>
                    <Text>Articles</Text>
                    <Text>Tutorials</Text>
                </Flex>

                <Flex direction='column' gap='2' align='center' style={{ textAlign: 'left', marginTop: '27px' }}>
                    <Heading style={{ paddingBottom: '5px' }}>
                        Support
                    </Heading>
                    <Text>FAQs</Text>
                    <Text>Help</Text>
                    <Text>Contact Us</Text>
                </Flex>

                <Flex direction='column' gap='2' align='end' style={{ marginTop: '27px', marginRight: '15px' }}>
                    <Heading style={{ paddingBottom: '5px' }}>
                        Stay Connected
                    </Heading>
                    <Flex gap='4'>
                        <InstagramLogoIcon width="32" height="32"></InstagramLogoIcon>
                        <TwitterLogoIcon width="32" height="32"></TwitterLogoIcon>
                        <DiscordLogoIcon width="32" height="32"></DiscordLogoIcon>
                    </Flex>
                </Flex>

            </Grid>
            <br></br>
            <Heading align='center'>
                DEV DEAKIN 2022
            </Heading>

            <Grid columns='3' justify='between' style={{ marginLeft: '22vw', marginTop: '5px', paddingBottom: '5px' }} align='center' gap='2'>
                <Text>Privacy Policy</Text>
                <Text>Terms</Text>
                <Text>Code of Conduct</Text>
            </Grid>
        </Theme>
    );
}

export default Footer;
