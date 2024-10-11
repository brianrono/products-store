import { useState } from "react";
import { Container, VStack, Heading, Box, useColorModeValue} from "@chakra-ui/react";

const CreatePage = () => {
   const {newProduct, setNewProduct} = useState({
      name: "",
      price: "",
      image: "",
   });

   return <Container maxW={"container.sm"}>
      <VStack
         spacing={8}
      >
         <Heading as={"h1"} size={"xl"} textAlign={"center"} mb={8}>
            Create a new product
         </Heading>
         <Box w={"full"} bg={useColorModeValue("white", "gray.800")}
         px={6} rounded={"lg"} shadow={"md"}
         >

         </Box>
      </VStack>
   </Container>;
};

export default CreatePage;
