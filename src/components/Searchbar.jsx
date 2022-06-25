import React, { useState } from "react";
import { IconButton, useColorMode, Input } from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";

function Searchbar(props) {
  const { size, onFormSubmit } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchterm, setSearchterm] = useState("");

  const onFormChange = (e) => {
    setSearchterm(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => onFormSubmit(e, searchterm)}
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

      <IconButton size={size} icon={<SearchIcon />} type='submit' />

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
