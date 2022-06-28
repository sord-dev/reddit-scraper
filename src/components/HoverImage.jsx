import { Box } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion";

function HoverImage(props) {
  return (
    <Box
    as={motion.div}
    onClick={props.onClick}
    whileHover={{
      scale: 1.1,
      transition: { duration: .2 },
    }}
    whileTap={{ scale: 0.9 }}
  >
    {<img  alt={props.alt} src={props.src} />}
  </Box>
  )
}

export default HoverImage