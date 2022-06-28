import React, { useCallback, useEffect, useState } from "react";
import HoverImage from "./HoverImage";
import ImageModal from "./ImageModal";
import { Image, useDisclosure } from "@chakra-ui/react";

function CustomImage(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  
  return (
    <>
      <HoverImage
        onClick={onOpen}
        alt={props.title}
        title={props.title}
        src={props.url}
      />

      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        src={props.src}
        title={props.title}
      >
        <a href={props.url}>
          <img  alt={props.title} src={props.url} />{" "}
        </a>
      </ImageModal>
    </>
  );
}

export default CustomImage;
