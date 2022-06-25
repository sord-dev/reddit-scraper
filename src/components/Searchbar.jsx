import React from "react";
import { IconButton, useColorMode, Stack, Input } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Searchbar(props) {
  const { size, onFormChange, searchterm } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack className="searchbar" direction="row-reverse">
      <IconButton
        size={size}
        className="color-switch"
        onClick={toggleColorMode}
        icon={
          colorMode === "light" ? (
            <MoonIcon size={size} />
          ) : (
            <SunIcon size={size} />
          )
        }
      />

      <Input
        size={size}
        placeholder="Search anything..."
        onChange={(e) => onFormChange(e)}
        value={searchterm}
      />
    </Stack>
  );
}

Searchbar.defaultProps = {
  size: "md",
};

export default Searchbar;
