import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import termsAndCondition from '../../assets/docs/termsAndCondition';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://i.ibb.co/K7XnGKM/logo.png"
        boxSize={['40', '48']}
      />
      <Text children="Start Learning Now" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Skill Sphere" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`We believe that education is a fundamental right that should be accessible to everyone, regardless of their geographical location or financial status. Our platform is built on the principles of equity, collaboration, and lifelong learning, with a focus on supporting rural populations in their journey towards personal and professional development. Through partnerships with local organizations and dedicated volunteers, we are committed to creating a positive impact on society by bridging educational gaps and creating opportunities for individuals to thrive and contribute meaningfully to their communities. Join us in this transformative journey as we work together to build a brighter and more equitable future through education.`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my="4"
    />

    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text  m="8" textAlign={['center', 'left']}>
          Join us now and become a part of our vibrant community dedicated to transforming lives through education. Don't wait any longer – join us today and be a catalyst for positive change in education and beyond!
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'All Your Payments are secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
