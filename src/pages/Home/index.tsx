import { Flex, Center, Text, Image, Button, VStack } from "@chakra-ui/react";
import { HiArrowSmRight } from "react-icons/hi";
import img from "../../assets/bg2.jpg";
import style from "./Home.module.scss";
import { Link } from "react-router-dom";

export default function Catalog() {
  return (
    <Flex>
      <Image src={img} h="100vh" w="100vw" className={style.img__background} />
      <Center w="100vw" h="80vh">
        <VStack>
          <Text w="600px" fontSize="4xl" as="b" align="center" mb="8">
            <mark className={style.text}>
              Searching for quality clothes? You can find it here, renewed stock
              and exclusive pieces. Don&lsquo;t miss this opportunity, check out
              our products in our catalog.
            </mark>
          </Text>
          <Link to="/catalog">
            <Button colorScheme="brand" rightIcon={<HiArrowSmRight />}>
              Check out
            </Button>
          </Link>
        </VStack>
      </Center>
    </Flex>
  );
}
