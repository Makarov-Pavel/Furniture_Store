import { useRef, useState, useCallback } from "react";
import { BiSearch } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setSearchValue } from "../../Redux/Slices/SearchSlice";
import debounce from "lodash.debounce";
import "./Search.css";
import { setType } from "../../Redux/Slices/FilterSlice";
import { getSearchParamsFromSS } from "../../utils/getSearchParamsFromSS";

const Search: React.FC = () => {
  const [value, setValue] = useState(getSearchParamsFromSS().search);
  const dispatch = useDispatch();

  const debounceFunc = useCallback(
    debounce((str: string) => {
      dispatch(setType("all"));
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const onEnterPressHandler = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter")
      dispatch(setSearchValue((e.target as HTMLInputElement).value));
  }, []);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      debounceFunc(e.target.value);
    },
    []
  );

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="search-container">
      <BiSearch className="search-icon" />
      <input
        className="search-input"
        ref={inputRef}
        placeholder="Search..."
        value={value}
        onChange={onChangeHandler}
        onKeyDown={onEnterPressHandler}
      />
      {value && (
        <CgClose
          className="close-icon"
          onClick={() => {
            setValue("");
            debounceFunc("");
            inputRef.current?.focus();
          }}
        />
      )}
    </div>
  );
};

export default Search;
