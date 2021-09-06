import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';

import overallBeforeImage from '../images/before_overall.png';
import addIntegrationImage from '../images/addDataIntegration.png';
import dataIntegrationImage from '../images/dataIntegration.png';
import datasetDetailsImage from '../images/dataset_details.png';

const Overall = () => {
  return (
    <>
      <Box w="100%" bgColor="#000" py="24" px={{ md: 6, lg: 12 }}>
        <Box maxW="6xl" marginX="auto">
          <Container maxW="100%">
            <Heading
              color="#fff"
              mb="10"
              fontSize="5xl"
              fontStyle="italic"
              textShadow="5px 5px 0 rgba(255,255,255,0.3)"
            >
              Before using{' '}
              <Text display="inline" color="green.400">
                BlitzScaling
              </Text>
            </Heading>
          </Container>
          <Flex
            flexDir={{
              sm: 'column',
              md: 'row',
            }}
          >
            <Container
              maxW={{
                base: '90%',
                md: '75%',
              }}
              pb={{
                base: '30px',
                md: '0',
              }}
            >
              <Image src={overallBeforeImage} />
            </Container>
          </Flex>
        </Box>
      </Box>
      <Box
        w="100%"
        bgColor="#f4f5f6"
        py="24"
        px={{ md: 6, lg: 12 }}
        style={{ marginTop: '0' }}
      >
        <Box maxW="6xl" marginX="auto">
          <Container id="solution">
            <Heading
              color="#333"
              mb="10"
              fontSize="5xl"
              fontStyle="italic"
              textShadow="5px 5px 0 #e3e3e3"
            >
              With{' '}
              <Text display="inline" color="green.400">
                BlitzScaling
              </Text>
            </Heading>
          </Container>
          <Flex
            padding={{
              base: '30px 0',
              md: '60px 0',
            }}
            flexDir={{
              sm: 'column',
              md: 'row',
            }}
          >
            <Container
              maxW={{
                base: '90%',
                md: '50%',
              }}
              pb={{
                base: '30px',
                md: '0',
              }}
            >
              <Image
                src={addIntegrationImage}
                boxShadow="0 25px 50px -10px gray"
              />
            </Container>
            <Container
              maxW={{
                base: '90%',
                md: '50%',
              }}
              paddingLeft={{
                base: '10px',
                md: '40px',
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Heading fontSize="3xl" mb="7" textShadow="5px 5px 0 #e3e3e3">
                  A Much Clear Big Picture
                </Heading>
                <Text fontSize="lg" textAlign="left">
                  Holistic overview of your data platform and how data flows
                  from one components to another.
                </Text>
              </Box>
            </Container>
          </Flex>

          <Flex
            padding={{
              base: '30px 0',
              md: '60px 0',
            }}
            flexDir={{
              sm: 'column',
              md: 'row',
            }}
          >
            <Container
              maxW={{
                base: '90%',
                md: '50%',
              }}
              textAlign="left"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Heading
                  fontSize="3xl"
                  mb="7"
                  textShadow="5px 5px 0 #e3e3e3"
                  textAlign="center"
                >
                  Integrate Dataset with No Code
                </Heading>
                <Text fontSize="lg">
                  Still waiting for engineers? With BlitzScaling, you can remove
                  dependency on infrastructure and data engineers to integrate
                  and use data products.
                </Text>
              </Box>
            </Container>
            <Container
              maxW={{
                base: '90%',
                md: '35%',
              }}
              pb={{
                base: '30px',
                md: '0',
              }}
            >
              <Image
                paddingLeft={{
                  base: '10px',
                  md: '40px',
                }}
                src={dataIntegrationImage}
                boxShadow="0 25px 50px -10px gray"
              />
            </Container>
          </Flex>
          <Flex
            padding={{
              base: '30px 0',
              md: '60px 0',
            }}
            flexDir={{
              sm: 'column',
              md: 'row',
            }}
          >
            <Container
              maxW={{
                base: '90%',
                md: '50%',
              }}
              pb={{
                base: '30px',
                md: '0',
              }}
            >
              <Image
                src={datasetDetailsImage}
                boxShadow="0 25px 50px -10px gray"
              />
            </Container>
            <Container
              display="flex"
              justifyContent="center"
              alignItems="center"
              maxW={{
                base: '90%',
                md: '50%',
              }}
              textAlign="left"
              paddingLeft={{
                base: '10px',
                md: '40px',
              }}
            >
              <Box>
                <Heading fontSize="3xl" mb="7" textShadow="5px 5px 0 #e3e3e3">
                  Holistic View of Dataset
                </Heading>
                <Text fontSize="lg">
                  Who owns this dataset? How good this dataset is? What are the
                  upstreams and downstreams for this dataset? When is this
                  dataset last updated? Don't need to ask around!
                </Text>
              </Box>
            </Container>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Overall;
