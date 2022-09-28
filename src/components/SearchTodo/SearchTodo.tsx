import { Fragment } from "react";
import { CustomInput, InputStyleType } from "../Input/Input";

interface Props {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchQ: string;
}
const SearchTodo: React.FC<Props> = ({ onSearch, searchQ }) => {
  return (
    <Fragment>
      <CustomInput
        style={InputStyleType.SEARCH_INPUT}
        onChange={(e) => onSearch(e)}
        placeholder="Search"
        value={searchQ}
      />
    </Fragment>
  );
};

export default SearchTodo;
