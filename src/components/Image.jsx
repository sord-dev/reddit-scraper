import {
  Box,
  Button,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const CustomImage = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as={motion.div}
        onClick={onOpen}
        whileHover={{
          scale: 1.1,
          transition: { duration: .2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Image alt={props.title} src={props.thumbnail} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent sx={{ width: "max-content" }}>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />

          <Image alt={props.title} src={props.thumbnail} />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button as="a" href={props.src} target="_blank" variant="ghost">
              To Reddit Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomImage;
