import React from "react";
import { IconButton, useColorMode, Stack, Input } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Searchbar(props) {
  const { size, onFormChange, onFormSubmit, searchterm } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <form
      onSubmit={(e) => onFormSubmit(e)}
      className="searchbar"
      style={{ display: "flex", flexDirection: "row-reverse", gap: "1em" }}
    >
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
    </form>
  );
}

Searchbar.defaultProps = {
  size: "md",
};

export default Searchbar;
