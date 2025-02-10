import { Button, Flex } from "@radix-ui/themes";

function Button1(props)
{
  return(
    <Flex justify='center' style={{margin: '5px'}}>
    <Button size='2' variant="soft" radius='large' highContrast>
        {props.txt}
    </Button>
    </Flex>
  )
}

export default Button1