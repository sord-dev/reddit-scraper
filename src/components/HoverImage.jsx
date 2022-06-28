import { Box } from '@chakra-ui/react'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";

function HoverImage(props) {
  const [height, setHeight] = useState(0)
  const measuredRef = useRef()

    useEffect(() => {
      measuredRef.current.addEventListener('load', () => {
        setHeight(measuredRef.current.clientHeight)
      })
     
    }, []);

  console.log(height)
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
    {<img ref={measuredRef} alt={props.alt} src={props.src} />}
  </Box>
  )
}

export default HoverImage