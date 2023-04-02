import { useEffect, useState } from "react";

import FoundItem from "./FoundItem";

import SearchLogo from "../../assets/searchLogo";

import classes from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    const clearUp = setTimeout(() => {
      if (searchValue !== "") {
        console.log('hi')
        setSearchedData(
          props.data.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        );
      }
    }, 500);

    return () => {
      clearTimeout(clearUp);
    };
  }, [searchValue]);

  const searchValueHandler = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {}, []);
  return (
    <div className={classes["input-wrapper"]}>
      <SearchLogo />
      <input
        type="search"
        placeholder={"Поиск..."}
        value={searchValue}
        onChange={searchValueHandler}
      />
      <div className={classes["input-foundItems_wrapper"]}>
        {searchedData.map((item) => {
          return <FoundItem name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default SearchBar;
