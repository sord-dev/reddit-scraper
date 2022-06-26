import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CustomImage = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>
        <Image alt={props.title} src={props.thumbnail} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />

          <Image alt={props.title} src={props.thumbnail} />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button as="a" href={props.src} variant="ghost">
              To Reddit Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomImage;
