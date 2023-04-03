import { useEffect, useState } from "react";

import FoundItem from "./FoundItem";

import SearchLogo from "../../assets/searchLogo";

import classes from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [isSearchedDataShow, setIsSearchedDataShow] = useState(false);

  useEffect(() => {
    const clearUp = setTimeout(() => {
      if (searchValue !== "") {
        setSearchedData(
          props.data.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
        setIsSearchedDataShow(true);
      } else {
        setSearchedData([]);
        setIsSearchedDataShow(false);
      }
    }, 300);

    return () => {
      clearTimeout(clearUp);
    };
  }, [searchValue]);

  const foundItemsShowHandler = (event) => {
    if (event.type === "focus") {
      setIsSearchedDataShow(true);
    }
  };

  const searchValueHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const disableFoundItemsHandler = () => {
    setIsSearchedDataShow(false);
  };

  return (
    <div className={classes["search-wrapper"]}>
      <div
        className={classes["input-wrapper"]}
        onClick={() => {
          document.getElementById("search-bar").focus();
        }}
      >
        <SearchLogo />
        <input
          type="search"
          id="search-bar"
          placeholder={"Поиск..."}
          value={searchValue}
          onChange={searchValueHandler}
          onFocus={foundItemsShowHandler}
          onBlur={foundItemsShowHandler}
          autoComplete="off"
        />
      </div>
      <div
        className={classes["input-foundItems_wrapper"]}
        id="search_found-items"
        style={
          !isSearchedDataShow || searchedData.length === 0
            ? { display: "none" }
            : {}
        }
      >
        {searchedData.map((item, index) => {
          return (
            <FoundItem
              key={index}
              name={item.name}
              sneakerRef={
                props.sneakersRef.find(
                  (sneakerRef) => sneakerRef.id === item.id
                ).ref
              }
              disableFoundItem={disableFoundItemsHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
