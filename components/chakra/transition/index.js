import { SlideFade, Box } from "@chakra-ui/react";

export default function SlideFadeComponent({ isOpen, setIsOpen, content }) {
  return (
    <>
      <SlideFade in={isOpen} offsetY="20px">
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {content}
        </Box>
      </SlideFade>
    </>
  );
}
