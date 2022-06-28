import { CircularProgress, Grid, useDisclosure } from "@chakra-ui/react";
import CustomImage from "./Image";
import { nanoid } from "nanoid";

const ImageList = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const imagesnew = props.images.map((img) => {
    return (
      <CustomImage
        key={nanoid()}
        title={img.title}
        url={img.url}
        alt={`${img.author}'s image`}
        src={img.postLink}
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
      />
    );
  });

  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap={7}
      mt="10px"
      p={2}
      justifyContent="center"
      alignItems="center"
    >
      {props.loading && (
        <CircularProgress
          sx={{ position: "absolute", top: "3em", right: "50%" }}
          isIndeterminate
        />
      )}
      {imagesnew}
    </Grid>
  );
};

export default ImageList;
