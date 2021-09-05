import { Button } from '@chakra-ui/button';
import { Box, Heading, Text } from '@chakra-ui/layout';

const EarlyAccess = () => {
  return (
    <Box width="100%" paddingY="12" paddingX="5">
      <Box
        marginX="auto"
        width="100%"
        maxW="6xl"
        bgColor="#222229"
        borderRadius="20px"
        padding="12"
      >
        <Heading color="#fff" mb="20px">
          Give it a try
        </Heading>
        <Text fontSize="xl" color="#fefefe">
          Get early access to our latest product!
        </Text>
        <Button _hover={{bg: 'green.500'}} bgColor="green.400" color="whiteAlpha.900" size="lg" marginTop="40px">Get Started</Button>
      </Box>
    </Box>
  );
};
export default EarlyAccess;
