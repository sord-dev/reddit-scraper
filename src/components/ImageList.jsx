import {
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import HoverImage from "./HoverImage";
import ImageModal from "./ImageModal";

const ImageList = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HoverImage
        onClick={onOpen}
        alt={props.title}
        title={props.title}
        src={props.url}
      />

      <ImageModal isOpen={isOpen} onClose={onClose} src={props.src} title={props.title}>
        <a href={props.url}><Image alt={props.title} src={props.url} /> </a>
      </ImageModal>
    </>
  );
};

export default ImageList;
