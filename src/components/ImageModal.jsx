import React from "react";
import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

function ImageModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent sx={{ width: "max-content" }}>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />

        {props.children}

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button as="a" href={props.src} target="_blank" variant="ghost">
            To Reddit Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ImageModal;
