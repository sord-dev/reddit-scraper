import {
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import HoverImage from "./HoverImage";
import ImageModal from "./ImageModal";

const CustomImage = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HoverImage
        onClick={onOpen}
        alt={props.title}
        title={props.title}
        src={props.thumbnail}
      />

      <ImageModal isOpen={isOpen} onClose={onClose} src={props.src} title={props.title}>
        <Image alt={props.title} src={props.thumbnail} />
      </ImageModal>
    </>
  );
};

export default CustomImage;
