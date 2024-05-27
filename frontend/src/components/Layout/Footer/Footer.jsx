import vg from "../../../assets/images/logo.png";
import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Logo = () => {
  return <Image rounded={"full"} w={16} h={16} src={vg} />;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("white")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("grey"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box  bg={useColorModeValue("black")} color={useColorModeValue("white")}  minH={'10vh'}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© 2023 Skill Sphere. All rights reserved</Text>
        <Stack color={useColorModeValue("black")} direction={"row"} spacing={6}>
          <SocialButton
            label={"Linkedin"}
            href={"https://in.linkedin.com/company/elevatifier"}
           
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"YouTube"}
            href={"https://www.youtube.com/elevatifier"}
         
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/elevatifier"}
    
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

