import { MagnifyingGlass } from "@/icons/magnifyingglass";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useState } from "react";

const SearchInput = ({ inputText, setInputText, onPressEnter }) => {
  return (
    <InputGroup>
      <InputLeftElement
        //pointerEvents="none"
        onClick={() => onPressEnter(inputText)}
      >
        <MagnifyingGlass color="white" />
      </InputLeftElement>
      <Input
        borderColor="grey.700"
        bg="grey.900"
        type="text"
        color="white"
        focusBorderColor="brand.400"
        placeholder="Search podcasts"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          onPressEnter(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.code === "13") {
            onPressEnter(inputText);
          }
        }}
      />
    </InputGroup>
  );
};

export default SearchInput;
