import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

const Comparison = () => {
  return (
    <Box maxW="6xl" marginX="auto">
      <Heading mb="30px" padding="12">
        See what would happen if you start using BlitzScaling:
      </Heading>
      <Tabs marginTop="5">
        <TabList
          justifyContent="center"
          flexDir={{
            base: 'column',
            md: 'row',
          }}
        >
          <Tab>Feature1 Comparison</Tab>
          <Tab>Feature2 Comparison</Tab>
          <Tab>Feature3 Comparison</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>
              <Box pb="30px" pt="30px">
                <Container maxW="1200px" pb="10" pt="5">
                  <Flex
                    marginY="5"
                    flexDir={{
                      base: 'column',
                      md: 'row',
                    }}
                    alignItems={{
                      base: 'center',
                      md: '',
                    }}
                  >
                    <Box width="300px">
                      <Image src="https://picsum.photos/id/23/800/450" />
                    </Box>
                    <Stack flex="1" padding="3" pt="0" pl="10" textAlign="left">
                      <Heading size="lg">
                        Start to use{' '}
                        <i style={{ color: '#48bb78' }}>BlitzScaling</i> to as
                        your One-Stop data platform today!
                      </Heading>
                      <Text>
                        Already tired of Lorem ipsum dolor? sit amet consectetur
                        adipisicing elit. Inventore distinctio ad pariatur et
                        nesciunt vitae, ex, sunt dignissimos quam magni tempore
                        assumenda. Sapiente consectetur suscipit, dolores
                        perferendis magnam mollitia libero?
                      </Text>
                    </Stack>
                  </Flex>
                </Container>
                <Container maxWidth="1200px">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src="https://picsum.photos/id/55/800/450"
                        srcSet="https://picsum.photos/id/55/800/450"
                        alt="Image one"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="https://picsum.photos/id/56/800/450"
                        srcSet="https://picsum.photos/id/56/800/450"
                        alt="Image two"
                      />
                    }
                  />
                </Container>
              </Box>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <Box pb="30px" pt="30px">
                <Container maxW="1200px" pb="10" pt="5">
                  <Flex
                    marginY="5"
                    flexDir={{
                      base: 'column',
                      md: 'row',
                    }}
                  >
                    <Box width="300px">
                      <Image src="https://picsum.photos/id/7/800/450" />
                    </Box>
                    <Stack flex="1" padding="3" pt="0" pl="10" textAlign="left">
                      <Heading size="lg">
                        Start to use{' '}
                        <i style={{ color: '#48bb78' }}>BlitzScaling</i> to as
                        your One-Stop data platform today!
                      </Heading>
                      <Text>
                        Already tired of Lorem ipsum dolor? sit amet consectetur
                        adipisicing elit. Inventore distinctio ad pariatur et
                        nesciunt vitae, ex, sunt dignissimos quam magni tempore
                        assumenda. Sapiente consectetur suscipit, dolores
                        perferendis magnam mollitia libero?
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
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <Box pb="30px" pt="30px">
                <Container maxW="1200px" pb="10" pt="5">
                  <Flex
                    marginY="5"
                    flexDir={{
                      base: 'column',
                      md: 'row',
                    }}
                  >
                    <Box width="300px">
                      <Image src="https://picsum.photos/id/11/800/450" />
                    </Box>
                    <Stack flex="1" padding="3" pt="0" pl="10" textAlign="left">
                      <Heading size="lg">
                        Start to use{' '}
                        <i style={{ color: '#48bb78' }}>BlitzScaling</i> to as
                        your One-Stop data platform today!
                      </Heading>
                      <Text>
                        Already tired of Lorem ipsum dolor? sit amet consectetur
                        adipisicing elit. Inventore distinctio ad pariatur et
                        nesciunt vitae, ex, sunt dignissimos quam magni tempore
                        assumenda. Sapiente consectetur suscipit, dolores
                        perferendis magnam mollitia libero?
                      </Text>
                    </Stack>
                  </Flex>
                </Container>
                <Container maxWidth="1200px">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src="https://picsum.photos/id/22/800/450"
                        srcSet="https://picsum.photos/id/22/800/450"
                        alt="Image one"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="https://picsum.photos/id/44/800/450"
                        srcSet="https://picsum.photos/id/44/800/450"
                        alt="Image two"
                      />
                    }
                  />
                </Container>
              </Box>
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Comparison;
