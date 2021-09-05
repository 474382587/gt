import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

const Comparison = () => {
  return (
    <Box pb="30px" pt="30px" paddingX="30px">
      <Heading mb="30px">
        See what would happen if you start using BlitzScaling:
      </Heading>
      <Container maxW="1200px" pb="10" pt="5">
        <Flex marginY="5">
          <Box width="300px">
            <Image src="https://picsum.photos/id/7/800/450" />
          </Box>
          <Stack flex="1" padding="3" pt="0" pl="10" textAlign="left">
            <Heading size="lg">
              Start to use <i style={{ color: '#48bb78' }}>BlitzScaling</i> to
              as your One-Stop data platform today!
            </Heading>
            <Text>
              Already tired of Lorem ipsum dolor? sit amet consectetur
              adipisicing elit. Inventore distinctio ad pariatur et nesciunt
              vitae, ex, sunt dignissimos quam magni tempore assumenda. Sapiente
              consectetur suscipit, dolores perferendis magnam mollitia libero?
            </Text>
          </Stack>
        </Flex>
      </Container>
      <Container maxWidth="1200px">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="https://picsum.photos/id/66/800/450"
              srcSet="https://picsum.photos/id/66/800/450"
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://picsum.photos/id/63/800/450"
              srcSet="https://picsum.photos/id/63/800/450"
              alt="Image two"
            />
          }
        />
      </Container>
    </Box>
  );
};

export default Comparison;
