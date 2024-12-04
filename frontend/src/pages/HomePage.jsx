import React from "react";
import { VStack, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
   const { fetchProducts, products } = useProductStore();

   useEffect(() => {
      fetchProducts();
   }, [fetchProducts]);
   console.log("products", products);

   return(
      <Container maxW="container.xl" py={12}>
         <VStack spacing={8}>
            <Text
                  fontSize={"30"}
                  fontWeight={"bold"}
                  bgGradient={"linear(to-r, cyan.400, blue.500)"}
                  bgClip={"text"}
                  textAlign={"center"}
               >
               Featured Products 🚀
            </Text>
            <SimpleGrid
               columns={{
                  base: 1,
                  md: 2,
                  lg: 3,
               }}
               spacing={10}
               w={"full"}
            >
               {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
               ))}
            </SimpleGrid>

            {/* UI to display when the're no available products*/}
            {products.length === 0 && (
               <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color="gray.500">
                  No products found 😢{" "}
                  <Link to={"/create"}>
                     <Text as="span" color="blue.500" _hover={{ textDecoration: "underline", textTransform: "capitalize" }}>
                        Create new product
                     </Text>
                  </Link>
               </Text>
            )}
         </VStack>
      </Container>
   );
};

export default HomePage;