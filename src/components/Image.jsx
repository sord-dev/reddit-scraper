import { Image} from '@chakra-ui/react'

const CustomImage = (props) => {
  return (
      <a href={props.src}>
        <Image alt={props.title} src={props.thumbnail} />
      </a>
  );
};

export default CustomImage;
