import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./home.css";
import { Link } from "react-router-dom";
import vg from "../../assets/images/bg.png";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { AiFillApple } from "react-icons/ai";
import introVideo from "../../assets/videos/intro.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <VStack
            width={"full"}
            alignItems={["center", "flex-end"]}
            spacing="8"
          >
            <Heading
              textAlign={["center", "left"]}
              children="Empower Rural Communities Through Affordable Education!"
              size={"2xl"}
            />
            <Text
              fontSize={"2xl"}
              fontFamily="cursive"
              textAlign={["center", "left"]}
              children="Join us in our mission to bridge the learning gap by offering low-cost courses and volunteer teaching opportunities."
            />
            <HStack>
              <Link to="/courses">
                <Button size={"lg"} colorScheme="yellow">
                  Explore Courses
                </Button>
              </Link>

              <Link to="/contact">
                <Button size={"lg"} colorScheme="yellow">
                  Become a mentor
                </Button>
              </Link>
            </HStack>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={"md"}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box p={8} textAlign="center">
        <Heading as="h1" size="xl" mb={4}>
          Our Platform
        </Heading>
        <Text fontSize="lg" mb={8}>
        We believe that everyone, regardless of their background or location, deserves access to quality learning opportunities. Our platform is designed to bridge the gap by offering a diverse range of courses tailored to the needs of rural communities. From practical skills in agriculture to digital literacy and beyond, we are committed to making education accessible, affordable, and transformative. Join us on this exciting adventure of personal growth, community engagement, and lifelong learning. Together, we can unlock potentials, inspire change, and build a brighter future for all.
        </Text>

        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>
            Empowering Rural Communities
          </Heading>
          <Text fontSize="md" mb={4}>
          Empowering Rural Communities is at the heart of our mission. We understand the unique challenges faced by individuals living in rural areas, and we are dedicated to providing them with the tools and resources they need to succeed. Our platform offers a wide range of courses specifically tailored to address the needs of rural populations, covering topics such as sustainable agriculture, entrepreneurship, healthcare, and technology skills. Through education, we aim to empower individuals, strengthen communities, and create lasting positive impacts on rural livelihoods. Join us in our efforts to empower rural communities and unlock their full potential.
          </Text>
          <Text fontSize="md" mb={4}>
            Our mission is to make quality education accessible and affordable
            for everyone, especially those in rural areas.
          </Text>
        </Box>

        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>
            Volunteer Teaching Opportunities
          </Heading>
          <Text fontSize="md" mb={4}>
          Volunteer Teaching Opportunities are a cornerstone of our platform, offering passionate individuals the chance to make a meaningful impact through education. Whether you're an expert in your field or simply eager to share your knowledge and skills, our platform provides a welcoming space for volunteer teachers to connect with enthusiastic learners from rural areas. By becoming a volunteer teacher, you can contribute to the growth and development of others while fostering a sense of community and collaboration. Join us in empowering individuals through education and be a catalyst for positive change in the lives of others.
          </Text>

          <Link to="/contact">
          <Button colorScheme="blue" size="md" mb={4}>
            Join as a Volunteer Teacher
          </Button>
              </Link>


          
        </Box>

        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>
            Affordable Learning
          </Heading>
          <Text fontSize="md" mb={4}>
          Affordable Learning is a core principle of our platform, ensuring that education remains accessible to all. We believe that financial constraints should not hinder anyone's ability to learn and grow. That's why we offer our courses at minimal costs or even for free in some cases, making quality education within reach for everyone, especially those in rural communities. By prioritizing affordability, we aim to break down barriers and create equal opportunities for individuals to pursue their educational aspirations without the burden of high costs. Join us in our commitment to making learning affordable and inclusive for all.
          </Text>
        </Box>

        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>
            Community Engagement
          </Heading>
          <Text fontSize="md" mb={4}>
          Community Engagement is fundamental to our platform, fostering connections, collaboration, and mutual support among learners and volunteers. We believe that learning is not just an individual journey but a collective experience enriched by shared insights and experiences. Our platform provides various avenues for community engagement, including discussion forums, live chat support, interactive sessions, and community events. Through active participation and interaction, our community members can learn from each other, share knowledge and experiences, and build meaningful relationships. Join our vibrant community and experience the power of collaboration in learning and personal growth.
          </Text>
        </Box>

        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>
            Our Commitment
          </Heading>
          <Text fontSize="md" mb={4}>
          Our Commitment is unwavering in our dedication to excellence, inclusivity, and continuous improvement. We prioritize the quality of education and user experience on our platform, constantly striving to enhance our offerings and meet the evolving needs of our community. Your feedback and suggestions are invaluable to us as we work tirelessly to create a platform that empowers individuals, fosters learning, and facilitates positive change. Our commitment extends beyond providing courses; it encompasses building a supportive environment where everyone feels valued, heard, and inspired to reach their full potential. Join us in this journey of growth, innovation, and transformation as we uphold our commitment to empowering lives through education.
          </Text>
        </Box>


        <Link to="/courses">
        <Button colorScheme="purple" size="lg" mb={8}>
          Join Us Today
        </Button>
              </Link>


       
      </Box>

      <Box padding={"12"} bg="black">
        <Heading
          textAlign={"center"}
          fontFamily="body"
          color={"yellow.400"}
          children="OUR BRANDS"
        />
        <HStack
          padding={"10"}
          className="brandsBanner"
          justifyContent={"space-evenly"}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <AiFillApple />
        </HStack>
      </Box>

      <div className="container2">
        <HStack>
          <Text
            fontSize={"l"}
            fontFamily="cursive"
            textAlign={"center"}
            marginLeft={"8"}
            marginRight={"8"}
            children="Our website is a dynamic platform dedicated to empowering rural communities through accessible and affordable education. We offer a diverse range of courses designed to meet the unique needs and interests of individuals living in rural areas, covering topics such as agricultural practices, basic computer skills, language proficiency, and vocational training. Our community-driven approach encourages volunteer teachers to contribute their expertise, creating a collaborative learning environment where knowledge is freely shared. With a user-friendly interface, low-cost offerings, and a commitment to continuous improvement, we strive to make quality education accessible to all, fostering personal growth and economic empowerment in rural regions. Join us in our mission to bridge the education gap and unlock the potential of every learner, regardless of their background or circumstances."
          />

          <video
            controls
            marginLeft="4"
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
          ></video>
        </HStack>
      </div>
    </section>
  );
};

export default Home;
